const stats = [
  { label: "FLAGSHIP TOOL", value: "MIX ARCHITEKT" },
  { label: "SCRIPTING ENGINE", value: "SCRIPTGPT — AI-POWERED" },
  { label: "ECONOMY", value: "BEER WALLET — 1 🍺 = $5" },
];

export default function StatsBar() {
  return (
    <div
      className="relative z-10 w-full grid"
      style={{
        backgroundColor: "var(--orange)",
        gridTemplateColumns: "repeat(3, 1fr)",
        height: "72px",
      }}
    >
      {stats.map((stat, i) => (
        <dl
          key={stat.label}
          className="flex flex-col justify-center px-6"
          style={{
            borderLeft: i > 0 ? "1px solid rgba(11,11,14,0.25)" : "none",
          }}
        >
          <dt
            className="text-[10px] font-medium uppercase"
            style={{
              color: "#0b0b0e",
              letterSpacing: "0.1em",
              fontFamily: "var(--font-barlow), Arial Narrow, Arial, sans-serif",
            }}
          >
            {stat.label}
          </dt>
          <dd
            className="text-[13px] font-bold uppercase"
            style={{
              color: "#0b0b0e",
              letterSpacing: "0.05em",
              fontFamily: "var(--font-barlow), Arial Narrow, Arial, sans-serif",
            }}
          >
            {stat.value}
          </dd>
        </dl>
      ))}
    </div>
  );
}
