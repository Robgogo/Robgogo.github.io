import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robera Worku",
  description: "My Simple Portfolio page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          "min-h-screen flex flex-col text-slate-800 " + poppins.className
        }
      >
        <header className="flex p-6 border-b">
          <div className="flex font-medium text-sm items-center max-w-[900px] mx-auto w-full">
            <Link href={"/"} className="hidden sm:inline">
              Robera Worku
            </Link>
            <Link href={"/"} className="sm:hidden">
              RW
            </Link>
          </div>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
