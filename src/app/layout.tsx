import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

import { lexend } from "@/constant";
import data from "@/content/layout.json";

import "../styles/globals.css";
import LayoutClient from "./LayoutClient";
import { LayoutDataType } from "./types";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Waste Management Landing Page Design | Eco-Friendly UI Concept",
  description:
    "Clean and modern waste management landing page UI. Eco-friendly design concept for environmental services, sustainability, and green business websites.",
  keywords: [
    "waste management landing page",
    "eco-friendly website design",
    "sustainability UI design",
    "green business web template",
    "environmental services website",
    "clean energy landing page",
    "corporate sustainability design",
  ],
  openGraph: {
    type: "website",
    siteName: "My Website",
    title: "Waste Management Landing Page Design | Eco-Friendly UI Concept",
    description:
      "Clean and modern waste management landing page UI. Eco-friendly design concept for environmental services, sustainability, and green business websites.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Eco-friendly Waste Management Landing Page Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waste Management Landing Page Design | Eco-Friendly UI Concept",
    description:
      "Clean and modern waste management landing page UI. Eco-friendly design concept for environmental services, sustainability, and green business websites.",
    images: ["/favicon.png"],
    creator: "@mywebsite",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180" }],
  },
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { footer, header } = data as LayoutDataType;

  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${lexend.variable} antialiased`}>
        <LayoutClient footer={footer} header={header}>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
};

export default Layout;
