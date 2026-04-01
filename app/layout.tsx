import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siddharth Mishra | Portfolio",
  description: "Java Backend Developer | Spring Boot | DSA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-black text-white">

        {/* MAIN CONTENT */}
        {children}

        {/* CURSOR GLOW */}
        <CursorGlow />

        {/* CURSOR TRACK SCRIPT */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('mousemove', function(e) {
                document.documentElement.style.setProperty('--x', e.clientX + 'px');
                document.documentElement.style.setProperty('--y', e.clientY + 'px');
              });
            `,
          }}
        />

      </body>
    </html>
  );
}