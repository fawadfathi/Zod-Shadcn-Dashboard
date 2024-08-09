import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main>
          <div className="flex">
            <div className="h-[100vh] w-[350px]">
              <Sidebar />
            </div>
            <div className="w-full">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
