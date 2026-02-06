import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Box } from "@mui/material";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import SmoothScroll from "@/components/SmoothScroll";
import NoiseOverlay from "@/components/NoiseOverlay";
import Preloader from "@/components/Preloader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anshu Nayak | Full Stack Developer",
  description: "Portfolio of Anshu Nayak, a Full Stack Developer specializing in Next.js, Angular, and Modern Web Design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeRegistry>
          <SmoothScroll>
            <Preloader /> {/* Added Preloader component */}
            <NoiseOverlay />
            <Box component="main" sx={{ position: 'relative' }}>
              {children}
            </Box>
          </SmoothScroll>
        </ThemeRegistry>
      </body>
    </html>
  );
}
