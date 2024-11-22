import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Using Turbopack and carbon",
  description: "Using Turbopack and carbon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
