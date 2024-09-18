/* eslint-disable new-cap */
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Firebase Next.js Hackpack",
  description: "Firebase Setup Integration with Next.js",
};

interface props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
