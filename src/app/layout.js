import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./Sidebar/page"; // Adjust the path if your Sidebar is located elsewhere

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          {/* Sidebar is rendered globally */}
          <Sidebar />
          {/* Main content area */}
          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
