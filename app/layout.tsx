import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const monstserrat = Montserrat({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={monstserrat.className}>{children}</body>
    </html>
  );
}
