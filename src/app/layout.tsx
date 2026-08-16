import type { Metadata } from "next";
import { Anton, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: "Graphic Designer Portfolio",
  description: "Visual Design • Art Direction • Branding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${robotoCondensed.variable} font-[family-name:var(--font-roboto-condensed)] flex justify-center min-h-screen py-4 md:py-8 bg-[#fdb913] text-[#1a1a1a] overflow-x-hidden`}
      >
        <div className="w-full max-w-3xl bg-[#f3efe0] shadow-[0px_0px_50px_rgba(0,0,0,0.3)] relative mx-auto flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}