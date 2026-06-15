import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.sudar.web.id'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sudar UI',
  url: baseUrl,
  alternateName: ['SudarUI', 'Sudar UI', 'Sudar UI Components', 'Sudar UI Aplication'],
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Sudar UI - Free Tailwind CSS Components",
  description:
    "Free, open-source Tailwind CSS components. Copy-paste ready components to build beautiful, responsive websites faster. No installation required.",
  keywords: ["tailwind css", "components", "ui library", "free", "open source"],
  openGraph: {
    title: "Sudar UI - Free Tailwind CSS Components",
    description: "Free, open-source Tailwind CSS components. Copy-paste ready components to build beautiful, responsive websites faster.",
    url: baseUrl,
    siteName: "Joko UI",
    images: [
      {
        url: `${baseUrl}/og.webp`,
        width: 1200,
        height: 630,
        alt: "Sudar UI - Free Tailwind CSS Components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudar UI - Free Tailwind CSS Components",
    description: "Free, open-source Tailwind CSS components. Copy-paste ready components to build beautiful, responsive websites faster.",
    images: [`${baseUrl}/og.webp`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        {/* Inject JSON-LD Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
    </html>
  );
}
