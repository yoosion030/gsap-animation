import Header from "@/components/Header";
import { GlobalStyle } from "@/styles/GlobalStyles";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ASAP",
  description: "Animation + GSAP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
