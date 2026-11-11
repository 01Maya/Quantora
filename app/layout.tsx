import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import StyledJsxRegistry from "@/lib/registry";
import RevealObserver from "@/lib/RevealObserver";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Quantora – AI for Finance",
  description:
    "The only finance research copilot designed to accelerate research and strengthen conviction.",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <StyledJsxRegistry>
          {children}
          <RevealObserver />
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
