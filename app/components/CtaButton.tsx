"use client";

export default function CtaButton() {
  return (
    <a
      href="#tools"
      className="mt-8 inline-block text-[11px] font-semibold uppercase px-6 py-2.5 transition-all duration-150"
      style={{
        color: "var(--fg)",
        border: "1px solid var(--accent)",
        borderRadius: "0",
        letterSpacing: "0.2em",
        fontFamily: "var(--font-barlow), 'Arial Narrow', Arial, sans-serif",
        alignSelf: "flex-start",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(94,234,212,.10)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(94,234,212,.55)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "transparent";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
      }}
    >
      GET STARTED »
    </a>
  );
}
