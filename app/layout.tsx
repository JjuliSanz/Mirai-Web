import type { Metadata } from "next";
import "./globals.css";
// import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import { Rajdhani, Noto_Sans_JP } from "next/font/google";

const logoFont = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--logo-font",
});

const primaryFont = localFont({
  // src: "./fonts/science.ttf",
  src: "./fonts/canavar.ttf",
  display: "swap",
  weight: "400",
  variable: "--primary-font",
});

const secondaryFont = Rajdhani({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--secondary-font",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://mirai-web-lab.vercel.app"),
  title: "MIRAI WEB LAB",
  description:
    "We specialize in web development, digital design, and creative solutions with futuristic, innovative concepts. Our approach is all about creating immersive, visually striking websites that feel like stepping into a neon-lit world of endless possibilities.",
  keywords: [
    "agency",
    "webdesign",
    "website",
    "responsive",
    "future",
    "restaurant",
    "ecommerce",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  creator: "Julian Sanz",
  publisher: "Julian Sanz",
  authors: {
    name: "Julian",
    url: "https://www.linkedin.com/in/julian-sanz-ba4270240/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primaryFont.variable} ${secondaryFont.variable} ${logoFont.variable} antialiased`}
      >
        {children}
      </body>
      {/* <body className={` antialiased`}>{children}</body> */}
    </html>
  );
}
