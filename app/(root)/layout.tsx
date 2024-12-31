import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Press_Start_2P } from 'next/font/google';
import "@/app/globals.css";

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: "400",
  // display: 'swap',
  variable: '--font-press-start-2p',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokedex",
  description: "A simple pokedex",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;