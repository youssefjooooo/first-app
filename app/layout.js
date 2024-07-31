import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "First-App",
  description:
    "This is my first app ever using next js framework, and so far so good 😁",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
