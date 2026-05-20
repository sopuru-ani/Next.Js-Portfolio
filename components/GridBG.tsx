"use client";
export default function GridBG() {
  return (
    <div
      className="
          fixed inset-0
          -z-10
          pointer-events-none
          opacity-60
        "
      style={{
        backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
        backgroundSize: "100px 100px",
        maskImage:
          "radial-gradient(circle at center, black 30%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, black 30%, transparent 80%)",
      }}
    />
  );
}
