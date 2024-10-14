import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/Navbar";
import { sharedMetadata } from "@/utils/shared-meta";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const font = localFont({
  src: "../assets/fonts/gilroy/Gilroy-Regular.ttf",
});

export const metadata: Metadata = {
  ...sharedMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
