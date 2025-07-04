import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Lynsie Aragon | Software Engineer",
  description:
    "Lynsie Aragon's portfolio: includes resume, work history, bowling, and showcases some of her frontend capabilites, as well as lists out her contact information.",
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
        <main className="w-full flex-grow flex justify-center ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
