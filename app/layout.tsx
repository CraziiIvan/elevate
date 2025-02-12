import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import SideBar from "@/components/side-bar";

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
      <body className="bg-gray-1 text-gray-12 grid h-dvh max-h-dvh grid-cols-1">
        <Header />
        <div className="flex">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
