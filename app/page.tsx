import Navbar from "./components/Navbar";
import Wave from "./components/Wave";
import StatsBar from "./components/StatsBar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="relative flex flex-col min-h-screen pt-12 z-10">
        {/* Hero */}
        <section className="relative flex-1 flex flex-col justify-center px-10 overflow-hidden min-h-[calc(100vh-72px)]">
          {/* Wave — right half */}
          <Wave />

          {/* Hero content */}
          <div className="relative z-10 flex flex-col" style={{ maxWidth: "45vw" }}>
            {/* Label */}
            <p
              className="text-[10px] font-medium uppercase mb-3"
              style={{
                color: "var(--muted)",
                letterSpacing: "0.2em",
                fontFamily: "var(--font-barlow), 'Arial Narrow', Arial, sans-serif",
              }}
            >
              VirtualDJ Ecosystem
            </p>

            {/* Display heading */}
            <h1
              className="uppercase font-black leading-[0.88]"
              style={{
                fontSize: "clamp(90px, 14vw, 200px)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
                fontFamily: "var(--font-barlow), 'Arial Narrow', Arial, sans-serif",
              }}
            >
              MIX<br />ARCHITEKT
            </h1>

            {/* Body copy */}
            <p
              className="text-[13px] font-medium uppercase mt-5 leading-relaxed"
              style={{
                color: "var(--muted)",
                letterSpacing: "0.06em",
                maxWidth: "340px",
                fontFamily: "var(--font-barlow), 'Arial Narrow', Arial, sans-serif",
              }}
            >
              PRECISION CROSSFADER TOOLS.<br />
              SCRIPTED TRANSITIONS. TOTAL CONTROL.
            </p>

            {/* CTA */}
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
          </div>
        </section>

        {/* Stats bar */}
        <StatsBar />
      </main>
    </>
  );
}
