import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MUSUBI | 営業支援・インサイドセールス・事業成長を支援するパートナー",
  description:
    "MUSUBIは営業支援・インサイドセールス・事業成長支援を通じて、企業の売上拡大と持続的な成長を実現するパートナーです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-white text-neutral-950">{children}</body>
    </html>
  );
}
