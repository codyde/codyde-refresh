import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { FaLaptopCode } from "react-icons/fa";
import Link from "next/link";
import Nav from "@/components/nav";

const inter = Open_Sans({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Cody De Arkland",
  description: "Cody De Arkland's personal website, CodyDe.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-slate-900">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
