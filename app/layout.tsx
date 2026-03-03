import type { Metadata } from "next";
import { IBM_Plex_Serif, Mona_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {Toaster} from "@/components/ui/sonner";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})


const monoSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "LibraMind",
  description: "An AI-powered conversational knowledge platform that transforms static documents into interactive learning assistants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${ibmPlexSerif.variable} ${monoSans.variable} relative font-sans antialiased`}
        >
          <Navbar />
          {children}
        <Toaster />
        </body>

      </html>
    </ClerkProvider>
  );
}
