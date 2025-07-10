import React from 'react'


export const metadata = {
  title: "Contact | ChopLife Shawarma - #1 IN PORT HARCOURT",
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

const layout = ({children}) => {
  return (
    <>
      {children}
    </>
  )
}

export default layout
