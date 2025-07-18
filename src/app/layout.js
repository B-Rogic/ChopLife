import { Geist, Geist_Mono, Gabarito } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartProvider";
import Head from "next/head";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ChopLife Shawarma - #1 IN PORT HARCOURT",
  description: "Experience the best shawarma in Port Harcourt. Chop Life Shawarma offers delicious chicken, beef, and mixed shawarmas, pizzas, and refreshing drinks. Order now for fast delivery!",
  keywords: [
    "Choplife Shawarma",
    "best shawarma in Port Harcourt",
    "Port Harcourt food delivery",
    "order shawarma online",
    "pizza in Port Harcourt",
    "affordable shawarma",
    "fast food Port Harcourt",
    "shawarma near me",
    "local food delivery PH",
    "best pizza deals",
    "tasty shawarma",
    "Choplife menu",
    "shawarma delivery Port Harcourt",
    "late-night food PH",
    "Nigerian street food",
  ],
  metadataBase: new URL("https://www.chop-life.com"),
  openGraph: {
    title: "ChopLife Shawarma",
    description:
      "Experience the best shawarma in Port Harcourt. Chop Life Shawarma offers delicious chicken, beef, and mixed shawarmas, pizzas, and refreshing drinks. Order now for fast delivery!",
    url: "https://www.chop-life.com",
    siteName: "ChopLife Shawarma",
    images: [
      {
        url: "https://chop-life.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FchopLifeLogo.46e68e19.png&w=2048&q=75",
        width: 1200,
        height: 630,
        alt: "Delicious Shawarma from Chop-Life",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChopLife Shawarma",
    description:
      "Experience the best shawarma in Port Harcourt. Chop Life Shawarma offers delicious chicken, beef, and mixed shawarmas, pizzas, and refreshing drinks. Order now for fast delivery!",
    images: [
      "https://chop-life.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FchopLifeLogo.46e68e19.png&w=2048&q=75",
    ],
  },
  verification: {
    google: "Uvh5IWY6Nw2dhXAt68X3vPf6kfggB0EzLf_AAkWZ4RY",
    other: {
      "msvalidate.01": "F46337E81B88D6CEA3C4F884D255A0E1",
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Title for the page */}
        <title>ChopLife Shawarma - #1 IN PORT HARCOURT</title>

        {/* The meta description tag */}
        <meta
          name="Chop Life Shawarma"
          content="Experience the best shawarma in Port Harcourt Chop Life Shawarma offers delicious chicken, beef, and mixed shawarmas, pizzas, and refreshing drinks. Order now for fast delivery!"
        />

        <meta name="msvalidate.01" content="F46337E81B88D6CEA3C4F884D255A0E1" />
        {/* Other meta tags you might want to include */}
        
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Choplife Shawarma, best shawarma in Port Harcourt, Port Harcourt food delivery, order shawarma online, pizza in Port Harcourt, affordable shawarma, fast food Port Harcourt, shawarma near me, local food delivery PH, best pizza deals, tasty shawarma, Choplife menu, shawarma delivery Port Harcourt, late-night food PH, Nigerian street food" />

        {/* Google Site Verification tag */}
        <meta name="google-site-verification" content="Uvh5IWY6Nw2dhXAt68X3vPf6kfggB0EzLf_AAkWZ4RY" />

        {/* Open Graph (for social media sharing) - manually added */}
        <meta property="og:title" content="ChopLife Shawarma" />
        <meta property="og:description" content="Experience the best shawarma in Port Harcourt Chop Life Shawarma offers delicious chicken, beef, and mixed shawarmas, pizzas, and refreshing drinks. Order now for fast delivery!" />
        <meta property="og:url" content="https://www.chop-life.com/" />
        <meta property="og:site_name" content="ChopLife Shawarma" />
        <meta property="og:image" content="https://chop-life.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FchopLifeLogo.46e68e19.png&w=2048&q=75" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Delicious Shawarma from Chop-Life" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />

        {/* Twitter Card - manually added */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ChopLife Shawarma" />
        <meta name="twitter:description" content="Experience the best shawarma in Port Harcourt Chop Life Shawarma offers delicious chicken, beef, and mixed shawarmas, pizzas, and refreshing drinks. Order now for fast delivery!" />
        <meta name="twitter:image" content="https://chop-life.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FchopLifeLogo.46e68e19.png&w=2048&q=75" />

         {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1TDTB2Y3HC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1TDTB2Y3HC');
        `}
      </Script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
