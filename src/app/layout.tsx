import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import {SessionProvider} from "next-auth/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: ";) VirtUN",
  description: "Tu chaza virtual",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          <main className="m-auto min-w-[500px] max-w-7xl p-4">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
