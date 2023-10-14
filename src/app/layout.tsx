import "./globals.css";
import { Inter } from "next/font/google";

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
        <main className="max-w-7x1 m-auto min-w-[500px] p-4">{children}</main>
      </body>
    </html>
  );
}
