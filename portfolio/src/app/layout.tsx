import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alan Xu",
  description: "Alan Xu is an Independent Developer (iOS, AI and Full Stack)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
          bg-violet-50 text-gray-950 relative`}
      >
        <div className="bg-blue-200 absolute top-[-6rem] -z-10 right-[11rem]
        h-[32rem] w-[32rem] rounded-full blur-[10rem] sm:w-[68rem]"></div>
        <div className="bg-pink-100 absolute top-[-1rem] -z-10 left-[-35rem]
        h-[32rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68rem]
        md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
       
      </body>
    </html>
  );
}
