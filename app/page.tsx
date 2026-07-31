import PortfolioShell from "@/components/PortfolioShell";
import LeetCode from "@/components/LeetCode";

/**
 * Server Component (no "use client").
 *
 * <LeetCode /> is also a Server Component. Passing it as children into the
 * client PortfolioShell still keeps its fetch on the server — React renders
 * children first, then slots the result into the client tree.
 */
export default function Home() {
  return (
    <PortfolioShell>
      <LeetCode username="sopuru" />
    </PortfolioShell>
  );
}
