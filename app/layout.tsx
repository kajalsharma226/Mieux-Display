import type { Metadata } from "next";
import { IBM_Plex_Mono, Poppins, Sora } from "next/font/google";
import "./globals.css";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mieux Display — Smart Display Solutions",
  description:
    "Discover Mieux’s smart display solutions for learning, collaboration and engagement. Interactive panels, LED video walls, digital standees and kiosks.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${mono.variable} ${sora.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
