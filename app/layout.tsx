import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Premium AI Hub — Your next upgrade starts here",
  icons: {
    icon: "/brand/premium-ai-hub.jpeg",
    apple: "/brand/premium-ai-hub.jpeg",
  },
  description:
    "Premium AI tools, local prices. Explore the Gemini Advanced 18-month offer and digital subscriptions for Nepal.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
