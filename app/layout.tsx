import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export const metadata: Metadata = {
  title: "Easy Loan | Instant Personal & Business Loans Online",
  description:
    "Get instant personal, business, and home loans online at low interest rates. Apply now and check your eligibility within minutes!",
  keywords: [
    "loan",
    "personal loan",
    "business loan",
    "home loan",
    "instant loan",
    "online loan application",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
