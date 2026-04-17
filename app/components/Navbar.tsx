"use client";

export default function Navbar() {
  return (
    <nav
      aria-label="Primary navigation"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-12"
      style={{
        background: "rgba(11,15,20,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(36,50,70,0.5)",
      }}
    >
      {/* Logo */}
      <a
        href="/"
        aria-label="Selekt home"
        className="text-[14px] font-black tracking-widest uppercase"
        style={{
          color: "var(--fg)",
          fontFamily: "var(--font-barlow), Arial Narrow, Arial, sans-serif",
          letterSpacing: "0.2em",
        }}
      >
        SELEKT
      </a>

      {/* Nav items */}
      <div className="flex items-center gap-2">
        {["TOOLS", "PRICING", "LOGIN"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[11px] font-semibold uppercase px-4 py-1.5 rounded-full transition-all duration-150"
            style={{
              color: "var(--fg)",
              border: "1px solid var(--border)",
              letterSpacing: "0.15em",
              fontFamily: "var(--font-barlow), Arial Narrow, Arial, sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(94,234,212,.65)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px rgba(94,234,212,.10)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
