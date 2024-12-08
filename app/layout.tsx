import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Navabar from "@/components/navbar";

const plus_Jakarta_regular = localFont({
  src: "./fonts/PlusJakartaSans-Regular.woff",
  variable: "--font-jakarta-regular",
  weight: "100 900",
});
const plus_Jakarta_medium = localFont({
  src: "./fonts/PlusJakartaSans-Medium.woff",
  variable: "--font-jakarta-medium",
  weight: "100 900",
});
const plus_Jakarta_bold = localFont({
  src: "./fonts/PlusJakartaSans-Bold.woff",
  variable: "--font-jakarta-bold",
  weight: "100 900",
});
const plus_Jakarta_semibold = localFont({
  src: "./fonts/PlusJakartaSans-SemiBold.woff",
  variable: "--font-jakarta-semibold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MORENT",
  description: "The Best Platform for Car Rental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plus_Jakarta_bold.variable} ${plus_Jakarta_medium.variable} ${plus_Jakarta_semibold.variable} ${plus_Jakarta_regular}antialiased bg-brandBg`}
      >
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}
