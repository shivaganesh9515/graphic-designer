import type { Metadata } from "next";
import { Anton, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Graphic Designer Portfolio",
  description:
    "Portfolio of a graphic designer specializing in branding, visual identity, and art direction - 2024 Collection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${robotoCondensed.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
