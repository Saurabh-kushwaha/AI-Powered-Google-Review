import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/providers/SessionProvider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ReviewQR AI — Turn Happy Customers Into Google Reviews",
  description:
    "ReviewQR AI helps restaurants and local businesses collect more Google reviews using smart QR codes and AI-powered review generation. Protect your reputation with smart feedback routing.",
  keywords: [
    "Google reviews",
    "QR code review",
    "AI review generation",
    "restaurant reviews",
    "local business reputation",
    "ReviewQR AI",
  ],
  openGraph: {
    title: "ReviewQR AI — Turn Happy Customers Into Google Reviews",
    description:
      "Smart QR codes + AI-powered review generation. Grow your Google reviews, protect your reputation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <SessionProvider>
          {children}
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}

