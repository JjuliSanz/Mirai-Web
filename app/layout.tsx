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
  metadataBase: new URL("https://www.miraiweblab.com"),
  title: "MIRAI WEB LAB | Future-Driven Web Development Agency",
  description:
    "Mirai Web Lab is a web development agency focused on crafting custom, fast, responsive, and visually stunning digital experiences",
  keywords: [
    "web development agency",
    "custom website development",
    "modern web design",
    "responsive websites",
    "web applications",
    "UI/UX design",
    "ecommerce development",
    "business websites",
    "portfolio websites",
    "restaurant websites",
    "Next.js development",
    "high-performance websites",
    "SEO-friendly websites",
    "website optimization",
    "search engine visibility",
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
