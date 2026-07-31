"use client";

import { useState } from "react";
import type { LeetCodeStats } from "@/lib/leetcode";

type ViewMode = "json" | "terminal";

function difficultyClass(difficulty: string): string {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return "text-emerald-400";
    case "medium":
      return "text-giorno-500";
    case "hard":
      return "text-diavolo-500";
    default:
      return "text-emerald-400";
  }
}

function Key({ name }: { name: string }) {
  return <span className="text-jotaro-500">&quot;{name}&quot;</span>;
}

function Punct({ children }: { children: React.ReactNode }) {
  return <span className="text-gray-500">{children}</span>;
}

function Str({
  children,
  href,
  className = "text-emerald-400",
}: {
  children: string;
  href?: string;
  className?: string;
}) {
  const quoted = (
    <>
      <span className="text-gray-500">&quot;</span>
      <span className={className}>{children}</span>
      <span className="text-gray-500">&quot;</span>
    </>
  );

  if (!href) return quoted;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline decoration-gray-600 underline-offset-2"
    >
      {quoted}
    </a>
  );
}

function Num({ value }: { value: number }) {
  return <span className="text-giorno-500">{value}</span>;
}

function Indent({ depth }: { depth: number }) {
  return <span>{"  ".repeat(depth)}</span>;
}

function ViewToggle({
  mode,
  onChange,
}: {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
}) {
  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm mb-4">
      <span className="text-gray-500">view:</span>
      <div className="inline-flex border border-gray-700 overflow-hidden">
        <button
          type="button"
          onClick={() => onChange("json")}
          className={`px-3 py-1 transition-colors ${
            mode === "json"
              ? "bg-gray-700 text-giorno-500 border-t-2 border-t-jotaro-500"
              : "text-gray-400 hover:text-jotaro-500"
          }`}
          aria-pressed={mode === "json"}
        >
          json
        </button>
        <button
          type="button"
          onClick={() => onChange("terminal")}
          className={`px-3 py-1 border-l border-gray-700 transition-colors ${
            mode === "terminal"
              ? "bg-gray-700 text-giorno-500 border-t-2 border-t-jotaro-500"
              : "text-gray-400 hover:text-jotaro-500"
          }`}
          aria-pressed={mode === "terminal"}
        >
          terminal
        </button>
      </div>
    </div>
  );
}

function JsonView({ data }: { data: LeetCodeStats }) {
  const { profile, recentAccepted, problemOfTheDay } = data;

  return (
    <pre className="font-mono leading-relaxed text-gray-300 whitespace-pre">
      <Punct>{"{"}</Punct>
      {"\n"}
      <Indent depth={1} />
      <Key name="username" />
      <Punct>: </Punct>
      <Str href={`https://leetcode.com/u/${profile.username}/`}>
        {profile.username}
      </Str>
      <Punct>,</Punct>
      {"\n"}
      <Indent depth={1} />
      <Key name="solved" />
      <Punct>: {"{"}</Punct>
      {"\n"}
      <Indent depth={2} />
      <Key name="easy" />
      <Punct>: </Punct>
      <Num value={profile.easy} />
      <Punct>,</Punct>
      {"\n"}
      <Indent depth={2} />
      <Key name="medium" />
      <Punct>: </Punct>
      <Num value={profile.medium} />
      <Punct>,</Punct>
      {"\n"}
      <Indent depth={2} />
      <Key name="hard" />
      <Punct>: </Punct>
      <Num value={profile.hard} />
      {"\n"}
      <Indent depth={1} />
      <Punct>{"}"},</Punct>
      {"\n"}
      <Indent depth={1} />
      <Key name="recent_accepted" />
      <Punct>: [</Punct>
      {recentAccepted.length === 0 ? (
        <Punct>]</Punct>
      ) : (
        <>
          {"\n"}
          {recentAccepted.map((sub, i) => (
            <span key={sub.titleSlug}>
              <Indent depth={2} />
              <Str href={`https://leetcode.com/problems/${sub.titleSlug}/`}>
                {sub.title}
              </Str>
              {i < recentAccepted.length - 1 ? <Punct>,</Punct> : null}
              {"\n"}
            </span>
          ))}
          <Indent depth={1} />
          <Punct>],</Punct>
        </>
      )}
      {"\n"}
      <Indent depth={1} />
      <Key name="problem_of_the_day" />
      <Punct>: </Punct>
      {problemOfTheDay ? (
        <>
          <Punct>{"{"}</Punct>
          {"\n"}
          <Indent depth={2} />
          <Key name="title" />
          <Punct>: </Punct>
          <Str href={problemOfTheDay.url}>{problemOfTheDay.title}</Str>
          <Punct>,</Punct>
          {"\n"}
          <Indent depth={2} />
          <Key name="difficulty" />
          <Punct>: </Punct>
          <Str className={difficultyClass(problemOfTheDay.difficulty)}>
            {problemOfTheDay.difficulty}
          </Str>
          {"\n"}
          <Indent depth={1} />
          <Punct>{"}"}</Punct>
        </>
      ) : (
        <span className="text-gray-500 italic">null</span>
      )}
      {"\n"}
      <Punct>{"}"}</Punct>
    </pre>
  );
}

function TerminalView({ data }: { data: LeetCodeStats }) {
  const { profile, recentAccepted, problemOfTheDay } = data;

  return (
    <div className="space-y-4 text-gray-300 ml-0 sm:ml-4">
      <div>
        <p className="text-giorno-500 mb-1">&gt; profile</p>
        <p className="ml-4">
          <span className="text-gray-500">username:</span>{" "}
          <a
            href={`https://leetcode.com/u/${profile.username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-jotaro-500 hover:text-jotarohover-500"
          >
            {profile.username}
          </a>
        </p>
      </div>

      <div>
        <p className="text-giorno-500 mb-1">&gt; solved</p>
        <ul className="ml-4 space-y-0.5 font-mono">
          <li>
            <span className={difficultyClass("Easy")}>Easy</span>
            <span className="text-gray-600"> ...... </span>
            <span className="text-white">{profile.easy}</span>
          </li>
          <li>
            <span className={difficultyClass("Medium")}>Medium</span>
            <span className="text-gray-600"> .... </span>
            <span className="text-white">{profile.medium}</span>
          </li>
          <li>
            <span className={difficultyClass("Hard")}>Hard</span>
            <span className="text-gray-600"> ...... </span>
            <span className="text-white">{profile.hard}</span>
          </li>
        </ul>
      </div>

      <div>
        <p className="text-giorno-500 mb-1">&gt; recent_accepted</p>
        {recentAccepted.length === 0 ? (
          <p className="ml-4 text-gray-500">[]</p>
        ) : (
          <ul className="ml-4 space-y-0.5">
            {recentAccepted.map((sub, i) => (
              <li key={sub.titleSlug}>
                <span className="text-gray-500">[{i}]</span>{" "}
                <a
                  href={`https://leetcode.com/problems/${sub.titleSlug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jotaro-500 hover:text-jotarohover-500"
                >
                  {sub.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <p className="text-giorno-500 mb-1">&gt; problem_of_the_day</p>
        {problemOfTheDay ? (
          <p className="ml-4">
            <a
              href={problemOfTheDay.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-jotaro-500 hover:text-jotarohover-500"
            >
              {problemOfTheDay.title}
            </a>{" "}
            <span className={difficultyClass(problemOfTheDay.difficulty)}>
              {problemOfTheDay.difficulty}
            </span>
          </p>
        ) : (
          <p className="ml-4 text-gray-500">null</p>
        )}
      </div>

      <p className="text-gray-500">-- end of file --</p>
    </div>
  );
}

/**
 * Client panel: same server-fetched data, toggle between json / terminal views.
 */
export default function LeetCodePanel({ data }: { data: LeetCodeStats }) {
  const [mode, setMode] = useState<ViewMode>("json");

  return (
    <div className="bg-deepblue-500 w-full max-w-4xl p-4 border border-gray-700 text-sm sm:text-base overflow-x-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
        <h1>
          <span className="text-jotaro-500">sopuru</span>
          @portfolio:~$ cat misc/leetcode
          {mode === "json" ? ".json" : ".txt"}
        </h1>
        <ViewToggle mode={mode} onChange={setMode} />
      </div>

      {mode === "json" ? <JsonView data={data} /> : <TerminalView data={data} />}
    </div>
  );
}
