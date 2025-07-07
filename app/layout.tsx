import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tekai.ai - AI That Transforms Research Into Action",
  description:
    "Transform complex research into actionable insights. Starting with WHO-Europe, expanding to transform industries. AI-powered research accessibility platform.",
  keywords:
    "AI research, WHO-Europe, RCCE-IM, research accessibility, academic AI, research synthesis",
  authors: [{ name: "Tekai.ai" }],
  openGraph: {
    type: "website",
    url: "https://tekai.ai/",
    title: "Tekai.ai - AI That Transforms Research Into Action",
    description:
      "Powering the future of research accessibility, one project at a time",
    images: [
      {
        url: "https://tekai.ai/assets/tekai-og-image.png",
        width: 1200,
        height: 630,
        alt: "Tekai.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tekai.ai - AI That Transforms Research Into Action",
    description:
      "Powering the future of research accessibility, one project at a time",
    images: ["https://tekai.ai/assets/tekai-twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
