import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://musubi-44.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MUSUBI | 営業支援・インサイドセールス・事業成長を支援するパートナー",
  description:
    "MUSUBIは営業支援・インサイドセールス・事業成長支援を通じて、企業の売上拡大と持続的な成長を実現するパートナーです。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MUSUBI | 営業支援・インサイドセールス・事業成長を支援するパートナー",
    description:
      "MUSUBIは営業支援・インサイドセールス・事業成長支援を通じて、企業の売上拡大と持続的な成長を実現するパートナーです。",
    url: "/",
    siteName: "MUSUBI",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "MUSUBI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MUSUBI | 営業支援・インサイドセールス・事業成長を支援するパートナー",
    description:
      "MUSUBIは営業支援・インサイドセールス・事業成長支援を通じて、企業の売上拡大と持続的な成長を実現するパートナーです。",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className="h-full scroll-smooth antialiased"
    >
      <body className="min-h-full bg-white text-neutral-950">{children}</body>
    </html>
  );
}
