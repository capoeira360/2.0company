import "./globals.css";
import localFont from "next/font/local";
import LenisRoot from "./lenis-root";
import FloatingTopBar from "@/components/FloatingTopBar";
import Footer from "@/components/Footer";
import DevLogFilter from "./DevLogFilter";
import SplashOverlay from "./SplashOverlay";

export const metadata = {
  title: "TAPit Softwares",
  description: "Design and development studio — modern interactions, responsive web, and UI/UX.",
  metadataBase: new URL("https://tapitsoftwares.tech"),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "TAPit Softwares",
    description: "Design and development studio — modern interactions, responsive web, and UI/UX.",
    url: "/",
    siteName: "TAPit Softwares",
    images: [
      {
        url: "/images/our-mission.jpg",
        width: 1200,
        height: 630,
        alt: "TAPit Softwares",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAPit Softwares",
    description: "Design and development studio — modern interactions, responsive web, and UI/UX.",
    images: ["/images/our-mission.jpg"],
  },
};

const montalban = localFont({
  src: [
    { path: "../../public/font/Montalban-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/font/Montalban-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-montalban",
  display: "swap",
});

const artine = localFont({
  src: [
    { path: "../../public/font/Artine-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/font/Artine-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/font/Artine-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-artine",
  display: "swap",
});

const playfair = localFont({
  src: [
    { path: "../../public/font/PlayfairDisplaySemiboldItalic-YzEYO.ttf", weight: "600", style: "italic" },
  ],
  variable: "--font-playfair",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${artine.className} ${montalban.variable} ${artine.variable} ${playfair.variable}`}>
        <SplashOverlay />
        <DevLogFilter />
        <LenisRoot>
          <FloatingTopBar />
          {children}
          <Footer />
        </LenisRoot>
      </body>
    </html>
  );
}
