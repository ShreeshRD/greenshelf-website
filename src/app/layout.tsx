import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "greenshelf",
  description: "A Marketplace for Sustainable Biotechnology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="d-flex flex-column min-vh-100">
      <body
        className={`${inter.variable} ${manrope.variable} antialiased d-flex flex-column flex-grow-1`}
      >
        <Header />
        <main className="container my-4 flex-grow-1 d-flex flex-column">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
