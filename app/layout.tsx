// app/layout.tsx
import { GeistSans, GeistMono } from "next/font/google";
import "./globals.css";

const geistSans = GeistSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = GeistMono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Китобхонаи Миллӣ - Китобҳои тоҷикӣ",
  description: "Беҳтарин китобхонаи онлайн бо забони тоҷикӣ. Китобҳоро ройгон бихонед.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;  // ← этот тип обязателен
}) {
  return (
    <html lang="tg">  {/* tg — для тоҷикӣ, или "en" */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
