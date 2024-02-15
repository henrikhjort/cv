import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "henrikhjort",
  description: "Web software development",
  icons: {
    icon: '/favicon.png',
  },
  keywords: [
    "code",
    "software",
    "web developer",
    "web development",
    "development",
    "developer",
    "freelancer",
    "henrik hjort",
    "react",
    "reactjs",
    "node",
    "nodejs",
    "next",
    "nextjs",
    "fullstack",
    "full stack",
    "full-stack",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
