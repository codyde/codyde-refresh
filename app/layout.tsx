import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";

const AsyncLDProvider = dynamic(() => import("@/components/ldprovider"), {
  ssr: false,
});

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback="<H2>Loading....</H2>">
            <AsyncLDProvider>
              <Nav />
              {children}
            </AsyncLDProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
