import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casa nova",
  description: "Site de casa nova de Bárbara e Victor",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
      <Script
        type="text/javascript"
        src="../../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></Script>
    </html>
  );
}
