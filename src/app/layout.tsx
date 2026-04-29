import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import LoadingScreen from "@/components/loading-screen";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corelabs | AI, Software & Content Growth Agency",
  description:
    "Corelabs builds websites, CRM systems, AI automations, workflow automations, and YouTube growth systems for modern brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
