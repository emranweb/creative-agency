import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ style: ["normal"], subsets: ["latin"] });

export const metadata = {
  title: "Creative Agency",
  description: "Make your dream business goal come true",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
