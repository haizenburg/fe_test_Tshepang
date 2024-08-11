import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
// import RightSidebar from "../components/RightSidebar";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Musicaly",
  description: "Discover and enjoy music"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex bg-white">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <Header />
          <main className="flex-grow p-8 overflow-y-auto">{children}</main>
        </div>
        {/* <RightSidebar /> */}
      </body>
    </html>
  );
}
