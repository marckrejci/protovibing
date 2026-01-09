import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ProtoVibing.ai | Go from stuck idea to tested prototype in 5 days",
  description:
    "Join the free ProtoVibing Challenge. 5 focused sessions, 30 minutes each. Build something real, get real feedback, and finally move forward. No coding required.",
  generator: "v0.app",
  keywords: [
    "prototype",
    "validation",
    "no-code",
    "startup",
    "idea validation",
    "product development",
    "MVP",
    "user testing",
    "ProtoVibing",
  ],
  authors: [{ name: "Pathfinder Foundry", url: "https://pathfinderfoundry.com" }],
  creator: "Pathfinder Foundry",
  publisher: "Pathfinder Foundry",
  metadataBase: new URL("https://protovibing.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ProtoVibing.ai | Go from stuck idea to tested prototype in 5 days",
    description:
      "Join the free ProtoVibing Challenge. 5 focused sessions, 30 minutes each. Build something real, get real feedback, and finally move forward.",
    url: "https://protovibing.ai",
    siteName: "ProtoVibing.ai",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ProtoVibing.ai - Go from stuck idea to tested prototype in 5 days",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProtoVibing.ai | Go from stuck idea to tested prototype in 5 days",
    description:
      "Join the free ProtoVibing Challenge. 5 focused sessions, 30 minutes each. Build something real, get real feedback, and finally move forward.",
    images: ["/og-image.jpg"],
    creator: "@pathfinderfndry",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.jpg",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1f35",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9VEEELF3RG" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9VEEELF3RG');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
