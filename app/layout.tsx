import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedBackground } from "@/components/shared/animated-background";
import { Cursor } from "@/components/shared/cursor";
import { ReadingProgressBar, BackToTop } from "@/components/shared/progress-and-utils";
import { CommandPalette } from "@/components/shared/command-palette";
import { buildMetadata, personJsonLd } from "@/lib/seo";
import { personalInfo } from "@/data/profile";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = buildMetadata({
  title: `${personalInfo.name} — ${personalInfo.role}`,
  description: personalInfo.shortBio,
  path: "",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#1a1024" },
    { media: "(prefers-color-scheme: light)", color: "#faf6fb" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
      </head>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} font-body antialiased`}
      >
        <ThemeProvider>
          <a
            href="#main-content"
            className="focus-ring fixed left-4 top-4 z-[200] -translate-y-24 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-transform focus:translate-y-0"
          >
            Skip to content
          </a>
          <AnimatedBackground />
          <Cursor />
          <ReadingProgressBar />
          <CommandPalette />
          <Navbar />
          <main id="main-content" className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
          <BackToTop />
          <Toaster theme="dark" position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
