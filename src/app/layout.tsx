import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";

export const metadata: Metadata = {
  title: "Lynsie Aragon Developer Portfolio",
  description: "Lynsie Aragon's software engineering portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-row h-screen">
          <main className="bg-blue-300 w-full">{children}</main>
          <NavBar />
        </div>
        <Footer />
      </body>
    </html>
  );
}
