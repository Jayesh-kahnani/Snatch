// src / app / layout.tsx;
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import AuthProvider from "./ui/authprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Snatch",
  description: "Snatch app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
        </AuthProvider>
        <div className="flex-grow text-white p-6 md:overflow-y-auto md:p-12">
        {children}</div>
      </body>
    </html>
  );
}
