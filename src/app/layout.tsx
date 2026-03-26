import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { CSPostHogProvider, PostHogPageView } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Commercial Architecture Advisory",
  description: "Elite, high-status Commercial Architect for Capitalized Deep-Tech, Energy, and Industrial companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${merriweather.variable} bg-slate-950 text-slate-300 antialiased selection:bg-white selection:text-slate-900`}>
        <CSPostHogProvider>
          <Suspense fallback={null}>
            <PostHogPageView />
          </Suspense>
          {children}
        </CSPostHogProvider>
      </body>
    </html>
  );
}
