import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import FloatingContactButton from "./components/FloatingContactButton";
import Footer from "./components/Footer";
import "./globals.css";

// --- Next.js SEO ---
export const metadata = {
  metadataBase: new URL("https://www.tstc.com.au/"),
  title: {
    default: "T&S Traffic Control | Traffic Management Solutions Sydney & NSW",
    template: "%s | T&S Traffic Control",
  },
  description:
    "T&S Traffic Control provides expert traffic management, planning, and safety solutions across Sydney and NSW. Accredited, experienced, and community-focused.",
  keywords: [
    "traffic control",
    "traffic management",
    "Sydney",
    "NSW",
    "traffic plans",
    "road safety",
    "event traffic",
    "construction traffic",
    "permit application",
    "signage installation",
  ],
  openGraph: {
    title: "T&S Traffic Control | Traffic Management Solutions Sydney & NSW",
    description:
      "T&S Traffic Control provides expert traffic management, planning, and safety solutions across Sydney and NSW. Accredited, experienced, and community-focused.",
    url: "https://www.tstc.com.au/",
    siteName: "T&S Traffic Control",
    images: [
      {
        url: "/logo.png",
        width: 240,
        height: 80,
        alt: "T&S Traffic Control Logo",
      },
    ],
    locale: "en_AU",
    type: "website",
  },

  alternates: {
    canonical: "https://www.tstc.com.au/",
  },
  icons: {
    icon: "/logo.png",
  },
};

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
