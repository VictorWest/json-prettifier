import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsSans = Poppins({
  weight: ["200", "400", "500", "600"]

})

export const metadata: Metadata = {
  title: "JSON Prettifier",
  description: "Prettify JSON Objects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
