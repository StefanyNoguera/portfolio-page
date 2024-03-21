import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Stefany Noguera",
  description: "Elevate your online presence with our custom web solutions.",
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
