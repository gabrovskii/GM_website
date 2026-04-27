import type { Metadata } from "next";
import { Manrope, Epilogue, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
});

const epilogue = Epilogue({ 
  subsets: ["latin"],
  variable: "--font-epilogue",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Gabriel Menezes | Quality Specialist",
  description: "Software Quality & Testing Specialist, Python Community Contributor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${manrope.variable} ${epilogue.variable} ${inter.variable} ${spaceGrotesk.variable} bg-surface text-on-surface dark:bg-brand-dark dark:text-[#e0e6f1] selection:bg-primary-container dark:selection:bg-slate-700`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <Analytics />
            <SpeedInsights />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
