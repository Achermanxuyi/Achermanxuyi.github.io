import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Alan Xu | Personal Portfolio",
  description: "Alan Xu is an Independent Developer focusing on AI and Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-sky-100 text-gray-950 relative`}
      >
        <div className="bg-rose-300 absolute top-[-6rem] -z-10 right-[16rem] 
        h-[32rem] w-[32rem] rounded-full blur-[10rem] sm:w-[68rem]"></div>
        <div className="bg-sky-300 absolute top-[-6rem] -z-10 right-[16rem] 
        h-[32rem] w-[32rem] rounded-full blur-[10rem] sm:w-[68rem]
        md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem]"></div>
        {children}
      </body>
    </html>
  );
}
