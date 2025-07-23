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
    apple: "/images/image.png",
  },
  title: {
    default:
      "Zain Ali - Full Stack Developer | React, Next.js, TypeScript Expert",
    template: "%s | Zain Ali Portfolio",
  },
  description:
    "Passionate full-stack developer with expertise in React, Next.js, TypeScript, and modern web technologies. Creating beautiful, functional, and user-friendly applications. Available for hire.",
  keywords: [
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Web Development",
    "Software Engineer",
    "Frontend Engineer",
    "Zain Ali",
    "Zain Younas",
    "Portfolio",
    "Hire Developer",
    "Freelance Developer",
    "React Expert",
    "Next.js Expert",
    "Modern Web Development",
    "Responsive Design",
    "UI/UX Development",
  ],
  authors: [{ name: "Zain Ali", url: "https://zain.bugslashers.com" }],
  creator: "Zain Ali",
  publisher: "Zain Ali",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zain.bugslashers.com",
    title:
      "Zain Ali - Full Stack Developer | React, Next.js, TypeScript Expert",
    description:
      "Passionate full-stack developer creating modern web applications with React, Next.js, and TypeScript. Available for hire.",
    siteName: "Zain Ali Portfolio",
    images: [
      {
        url: "https://zain.bugslashers.com/images/image.png",
        width: 1200,
        height: 630,
        alt: "Zain Ali - Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zain Ali - Full Stack Developer | React, Next.js Expert",
    description:
      "Passionate full-stack developer creating modern web applications. Specializing in React, Next.js, and TypeScript.",
    creator: "@zainali73938845", // Update with your actual Twitter handle
    images: ["https://zain.bugslashers.com/images/image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://zain.bugslashers.com",
  },
  category: "technology",
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
