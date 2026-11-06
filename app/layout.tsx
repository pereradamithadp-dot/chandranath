import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Chandranath & Company | Chartered Accountants",
  description:
    "Chartered accountants in Panadura and Rathnapura, Sri Lanka. Audit, tax and advice for hotels, plantations, traders, manufacturers and investment companies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
