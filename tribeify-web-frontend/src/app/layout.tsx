import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navigation from "./Navigation";
import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} min-h-dvh bg-stone-100`}>
        {children}
      </body>
    </html>
  );
}
