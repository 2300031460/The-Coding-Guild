import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sentinel Dashboard",
  description: "AI-powered predictive income protection demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <NavBar />
        <main className="mx-auto max-w-5xl px-4 py-7 sm:py-8">{children}</main>
      </body>
    </html>
  );
}
