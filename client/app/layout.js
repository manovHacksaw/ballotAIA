import localFont from "next/font/local";
import "./globals.css";
import { VotingProvider } from "@/context/VotingContext";
import Navbar from "@/components/Navbar";
import { ToastProvider } from "@radix-ui/react-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <VotingProvider>
      <ToastProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-1 px-32`} >

          {children}


        </body>
      </html>
      </ToastProvider>
    
    </VotingProvider>

  );
}