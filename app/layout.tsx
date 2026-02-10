import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "(주) 유현건설",
  description: "(주) 유현건설 프론트엔드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
