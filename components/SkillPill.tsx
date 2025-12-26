function SkillPill({ pill, size }: { pill: string; size: string }) {
  return (
    <span
      className={`
      text-${size}
      px-2 py-0.5
      border border-gray-600
      text-gray-300
      bg-[#0f172a]
      rounded-sm
      font-mono
    `}
    >
      {pill}
    </span>
  );
}

export default SkillPill;
