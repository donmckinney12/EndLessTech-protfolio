import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://endlesstech.llc"),
  title: "EndLessTech LLC | Autonomous SaaS Holding",
  description: "High-fidelity venture lab architecting autonomous SaaS ecosystems for institutional acquisition.",
  keywords: ["SaaS", "Venture Lab", "Acquisition", "Autonomous Software", "Exit Strategy", "M&A"],
  authors: [{ name: "Donald McKinney" }],
  openGraph: {
    title: "EndLessTech LLC | Autonomous SaaS Holding",
    description: "High-fidelity venture lab architecting autonomous SaaS ecosystems for institutional acquisition.",
    url: "https://endlesstech.llc",
    siteName: "EndLessTech LLC",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "EndLessTech LLC Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EndLessTech LLC | Autonomous SaaS Holding",
    description: "High-fidelity venture lab architecting autonomous SaaS ecosystems for institutional acquisition.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      appearance={{
        variables: { colorPrimary: "#22d3ee" },
        elements: {
          card: "bg-slate-950 border border-slate-800 backdrop-blur-xl",
          headerTitle: "text-white",
          headerSubtitle: "text-slate-400",
          socialButtonsBlockButton: "bg-white/5 border-slate-800 text-white hover:bg-white/10",
          formButtonPrimary: "bg-cyan-400 hover:bg-cyan-500 text-slate-950 font-bold",
          footerActionLink: "text-cyan-400 hover:text-cyan-500",
        }
      }}
    >
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <head>
          {/* New Relic Institutional Telemetry Placeholder */}
          <Script id="new-relic-init" strategy="afterInteractive">
            {`
              window.NREUM || (window.NREUM = {});
              NREUM.info = {
                beacon: "bam.nr-data.net",
                errorBeacon: "bam.nr-data.net",
                licenseKey: "${process.env.NEXT_PUBLIC_NEW_RELIC_LICENSE_KEY || 'NRJS-MOCK-LICENSE-KEY'}",
                applicationID: "ENDLESS_TECH_NEXUS",
                sa: 1
              };
            `}
          </Script>
        </head>
        <body className="min-h-full flex flex-col bg-slate-950 text-white">
          <Script id="clerk-check" strategy="afterInteractive">
            {`
              if (!"${process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || ''}") {
                console.warn("CRITICAL: NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is missing. Clerk will not initialize.");
              }
            `}
          </Script>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
