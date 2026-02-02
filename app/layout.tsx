import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import FloatingContactButton from "./components/FloatingContactButton";
import Footer from "./components/Footer";
import "./globals.css";

const helveticaNow = localFont({
  src: [
    {
      path: "../public/font/HelveticaNowDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/HelveticaNowDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/HelveticaNowDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-now",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helveticaNow.variable} font-anton antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
}
