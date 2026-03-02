'use client'

import * as React from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOSProvider from "./components/AOSProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <AOSProvider>
          <Navbar />
          {children}
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
