import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import SideBar from "@/components/side-bar";
import { ScrollArea } from "@base-ui-components/react/scroll-area";
import { Toaster } from "sonner";

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
      <body className="bg-gray-1 text-gray-12 h-dvh overflow-y-hidden">
        <Header />
        <div className="flex h-full">
          <Toaster position="top-center" />
          <SideBar />
          <ScrollArea.Root className="h-[calc(100vh-56px)] flex-1 snap-x scroll-pt-6 overflow-y-scroll scroll-smooth pb-6">
            <ScrollArea.Viewport>{children}</ScrollArea.Viewport>
            <ScrollArea.Scrollbar>
              <ScrollArea.Thumb className="bg-gray-2" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner />
          </ScrollArea.Root>
        </div>
      </body>
    </html>
  );
}
