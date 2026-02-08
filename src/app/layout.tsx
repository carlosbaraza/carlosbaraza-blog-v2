import type { Metadata } from "next";
import { Source_Serif_4, Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Carlos Baraza",
    template: "%s | Carlos Baraza",
  },
  description:
    "Side hustle newsletter. Humble insights of a lifetime building online products. I write software and other philosophical stuff.",
  metadataBase: new URL("https://carlosbaraza.com"),
  openGraph: {
    title: "Carlos Baraza",
    description:
      "Side hustle newsletter by Carlos Baraza. Software, startups, and philosophy.",
    url: "https://carlosbaraza.com",
    siteName: "Carlos Baraza",
    locale: "en_US",
    type: "website",
    images: ["/static/images/twitter-card.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Baraza",
    description:
      "Side hustle newsletter by Carlos Baraza. Software, startups, and philosophy.",
    images: ["/static/images/twitter-card.jpg"],
  },
  icons: {
    icon: [
      { url: "/static/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/static/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/static/favicons/apple-touch-icon.png",
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${inter.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 min-h-[calc(100vh-12rem)]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
