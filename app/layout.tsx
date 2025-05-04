import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wio Bank - Digital Banking Solutions",
  description:
    "Experience seamless digital banking with Wio Bank. Manage your finances, investments, and more with ease.",
  keywords: [
    "Wio Bank",
    "Digital Banking",
    "Investments",
    "Savings",
    "Financial Management",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Wio Bank - Digital Banking Solutions",
    description:
      "Experience seamless digital banking with Wio Bank. Manage your finances, investments, and more with ease.",
    url: "https://wio.io",
    siteName: "Wio Bank",
    images: [
      {
        url: "https://wio.io/logo.png", // please change the original image
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
