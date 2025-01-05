import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Layout/Header";

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start-2p",
});

export const metadata: Metadata = {
  title: "Pokedex",
  description: "A simple pokedex",
};

interface RootLayoutProps {
  children: React.ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.variable} antialiased`}
      >
        <Header/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}

export default RootLayout;