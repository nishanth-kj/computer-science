import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";
import { AppHeader } from "@/components/layout/app-header";
import { Providers } from "@/components/layout/providers";
import { TopicFrame } from "@/components/layout/topic-frame";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { rootMetadata } from "@/lib/seo";
import "../styles.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-ibm-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-ibm-mono",
  display: "swap",
});

const display = Newsreader({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0e11" },
    { media: "(prefers-color-scheme: light)", color: "#f4f1ea" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeBoot = `(function(){try{var t=localStorage.getItem("cs-atlas-theme");var d=true;if(t){var p=JSON.parse(t);if(p&&p.state&&p.state.theme==="light")d=false;}document.documentElement.classList.toggle("dark",d);}catch(e){document.documentElement.classList.add("dark");}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${display.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/__grok/icon-180.png" />
      </head>
      <body className="min-h-dvh bg-bg font-sans text-fg">
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
        <PreviewHostBridge />
        <Providers>
          <div className="flex min-h-dvh flex-col">
            <AppHeader />
            <div className="flex-1">
              <TopicFrame>{children}</TopicFrame>
            </div>
          </div>
        </Providers>
        <script src="https://grok.com/grok-app-builder/extensions.js" async />
      </body>
    </html>
  );
}
