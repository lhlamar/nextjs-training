import type { Metadata } from "next";
import "./globals.css";
import { sourceSans3 } from "@/public/fonts"

export const metadata: Metadata = {
  title: "NextJS Training",
  description: "Training I am doing for CGI on learning NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans3.className} bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
