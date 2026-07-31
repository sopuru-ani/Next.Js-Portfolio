import { getLeetCodeStats } from "@/lib/leetcode";
import LeetCodePanel from "@/components/LeetCodePanel";

/**
 * Server Component — fetches on the server, then hands data to a client panel
 * that can toggle between json / terminal views.
 */
async function LeetCode({ username }: { username: string }) {
  try {
    const data = await getLeetCodeStats(username);
    return <LeetCodePanel data={data} />;
  } catch {
    return (
      <div className="bg-deepblue-500 w-full max-w-4xl p-4 border border-gray-700 text-sm sm:text-base">
        <h1 className="mb-4">
          <span className="text-jotaro-500">sopuru</span>
          @portfolio:~$ cat misc/leetcode.json
        </h1>
        <p className="text-diavolo-500 ml-0 sm:ml-4">
          &gt; error: Unable to load LeetCode statistics.
        </p>
      </div>
    );
  }
}

export default LeetCode;
