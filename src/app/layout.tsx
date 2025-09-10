import type { Metadata } from "next";
import "./globals.css";

import { PT_Serif, Roboto } from "next/font/google";

const ptSerif = PT_Serif({
  style: ["normal", "italic"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-pt-serif",
  weight: ["400", "700"],
});

const roboto = Roboto({
  style: ["normal", "italic"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  description: "ЖК “Тихая Гавань” Территория комфорта",
  title: "ЖК “Тихая Гавань”",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ptSerif.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
