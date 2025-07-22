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
  icons: {
    icon: "/images/image.png",
  },
  title: "Zain Ali - Full Stack Developer",
  description:
    "Passionate full-stack developer with expertise in React, Next.js, TypeScript, and modern web technologies. Creating beautiful, functional, and user-friendly applications.",
  keywords: [
    "Full Stack Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Zain Ali",
    "Zain Younas",
    "Portfolio",
    "Software Engineer",
    "JavaScript Developer",
    "Node.js",
    "Frontend Engineer",
  ],
  authors: [{ name: "Zain Ali" }],
  creator: "Zain Ali",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zainyounas.vercel.app",
    title: "Zain Ali - Full Stack Developer",
    description:
      "Passionate full-stack developer creating modern web applications",
    siteName: "Zain Ali Portfolio",
    images: [
      {
        url: "https://zainyounas.vercel.app/images/image.png",
        width: 1200,
        height: 630,
        alt: "Zain Ali - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zain Ali - Full Stack Developer",
    description:
      "Passionate full-stack developer creating modern web applications",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "l1PaSTS31oEt7Oxfr2SuTzUzi9g0MaXcXX4dgWsR7Wk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
