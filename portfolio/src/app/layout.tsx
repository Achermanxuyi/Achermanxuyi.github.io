import Header from "@/components/header"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Junji Liao",
  description: "Junji Liao is an Independent Developer (iOS, AI and Full Stack)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
          bg-violet-50 text-gray-950`}
      >
        <div className="bg-blue-200 absolute top-[-6rem] -z-10 right-[11rem]
        h-[32rem] w-[32rem] rounded-full blur-[10rem] sm:w-[68rem]"></div>
        <div className="bg-pink-100 absolute top-[-1rem] -z-10 left-[-35rem]
        h-[32rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68rem]
        md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
       
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
