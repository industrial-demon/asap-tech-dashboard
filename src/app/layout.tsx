import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Providers } from "~/providers/providers";

import "./globals.css";
import { Header } from "~/components/header/header";
// import '@radix-ui/themes/styles.css';

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asap Tech",
  description: "dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
      
        <Providers>
          <Header />
          {children}
          
          </Providers>
      </body>
    </html>
  );
}
