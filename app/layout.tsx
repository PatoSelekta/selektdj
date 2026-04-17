import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Selekt — Premium tools for VirtualDJ",
  description: "Premium tools for VirtualDJ by Pato Selekta. Mix Architekt, ScriptGPT, and more.",
  metadataBase: new URL("https://www.selektdj.com"),
  openGraph: {
    title: "Selekt — Premium tools for VirtualDJ",
    description: "Premium tools for VirtualDJ by Pato Selekta.",
    url: "https://www.selektdj.com",
    siteName: "Selekt",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} h-full`}>
      <body className="min-h-full flex flex-col relative">{children}</body>
    </html>
  );
}
