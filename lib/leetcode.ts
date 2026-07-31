/**
 * LeetCode GraphQL helpers.
 *
 * One endpoint, several small queries — easier to extend later (contest rating,
 * heatmap, badges) without one giant query.
 *
 * Endpoint is unofficial (what leetcode.com uses internally).
 */

const LEETCODE_GRAPHQL = "https://leetcode.com/graphql";
const REVALIDATE_SECONDS = 3600; // 1 hour

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface DifficultyCount {
  difficulty: string;
  count: number;
}

export interface LeetCodeProfile {
  username: string;
  easy: number;
  medium: number;
  hard: number;
}

export interface RecentSubmission {
  id: string;
  title: string;
  titleSlug: string;
  timestamp: string;
}

export interface ProblemOfTheDay {
  date: string;
  title: string;
  titleSlug: string;
  difficulty: string;
  /** Absolute URL to the problem */
  url: string;
}

export interface LeetCodeStats {
  profile: LeetCodeProfile;
  recentAccepted: RecentSubmission[];
  problemOfTheDay: ProblemOfTheDay | null;
}

// ---------------------------------------------------------------------------
// Low-level fetch
// ---------------------------------------------------------------------------

async function leetcodeFetch<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const res = await fetch(LEETCODE_GRAPHQL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    throw new Error(`LeetCode GraphQL HTTP ${res.status}`);
  }

  const json: { data?: T; errors?: { message: string }[] } = await res.json();

  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join("; "));
  }

  if (!json.data) {
    throw new Error("LeetCode GraphQL returned no data");
  }

  return json.data;
}

// ---------------------------------------------------------------------------
// Queries (separate on purpose — cleaner + extensible)
// ---------------------------------------------------------------------------

const PROFILE_QUERY = `
  query userSessionProgress($username: String!) {
    matchedUser(username: $username) {
      username
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
  }
`;

const RECENT_AC_QUERY = `
  query recentAcSubmissions($username: String!, $limit: Int!) {
    recentAcSubmissionList(username: $username, limit: $limit) {
      id
      title
      titleSlug
      timestamp
    }
  }
`;

const POTD_QUERY = `
  query questionOfToday {
    activeDailyCodingChallengeQuestion {
      date
      link
      question {
        title
        titleSlug
        difficulty
      }
    }
  }
`;

// ---------------------------------------------------------------------------
// Individual helpers
// ---------------------------------------------------------------------------

function countFor(
  rows: DifficultyCount[] | undefined,
  difficulty: string,
): number {
  return rows?.find((r) => r.difficulty === difficulty)?.count ?? 0;
}

export async function getLeetCodeProfile(
  username: string,
): Promise<LeetCodeProfile> {
  const data = await leetcodeFetch<{
    matchedUser: {
      username: string;
      submitStats: { acSubmissionNum: DifficultyCount[] };
    } | null;
  }>(PROFILE_QUERY, { username });

  if (!data.matchedUser) {
    throw new Error(`LeetCode user not found: ${username}`);
  }

  const rows = data.matchedUser.submitStats.acSubmissionNum;

  return {
    username: data.matchedUser.username,
    easy: countFor(rows, "Easy"),
    medium: countFor(rows, "Medium"),
    hard: countFor(rows, "Hard"),
  };
}

/** Fetch recent ACs, then keep first N unique problems by titleSlug. */
export async function getRecentAccepted(
  username: string,
  uniqueLimit = 10,
): Promise<RecentSubmission[]> {
  // Over-fetch a bit so duplicates still leave enough unique titles
  const fetchLimit = Math.max(uniqueLimit * 5, 15);

  const data = await leetcodeFetch<{
    recentAcSubmissionList: RecentSubmission[];
  }>(RECENT_AC_QUERY, { username, limit: fetchLimit });

  const seen = new Set<string>();
  const unique: RecentSubmission[] = [];

  for (const sub of data.recentAcSubmissionList ?? []) {
    if (seen.has(sub.titleSlug)) continue;
    seen.add(sub.titleSlug);
    unique.push(sub);
    if (unique.length >= uniqueLimit) break;
  }

  return unique;
}

export async function getProblemOfTheDay(): Promise<ProblemOfTheDay | null> {
  const data = await leetcodeFetch<{
    activeDailyCodingChallengeQuestion: {
      date: string;
      link: string;
      question: {
        title: string;
        titleSlug: string;
        difficulty: string;
      };
    } | null;
  }>(POTD_QUERY);

  const potd = data.activeDailyCodingChallengeQuestion;
  if (!potd) return null;

  return {
    date: potd.date,
    title: potd.question.title,
    titleSlug: potd.question.titleSlug,
    difficulty: potd.question.difficulty,
    url: `https://leetcode.com${potd.link}`,
  };
}

/**
 * Facade used by the UI: runs the three queries in parallel.
 */
export async function getLeetCodeStats(
  username: string,
): Promise<LeetCodeStats> {
  const [profile, recentAccepted, problemOfTheDay] = await Promise.all([
    getLeetCodeProfile(username),
    getRecentAccepted(username, 3),
    getProblemOfTheDay(),
  ]);

  return { profile, recentAccepted, problemOfTheDay };
}
