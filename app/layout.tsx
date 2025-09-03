import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User Dashboard - PK Interview Task",
  description:
    "A modern user dashboard built with Next.js, TypeScript, and Framer Motion",
  keywords: ["dashboard", "users", "nextjs", "typescript", "framer-motion"],
  authors: [{ name: "PK Interview Task" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
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
