import type { Metadata } from "next";
import { Playfair_Display, EB_Garamond, Montserrat } from "next/font/google";
import { LeadFormProvider } from "@/context/LeadFormContext";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chariea Aviya Wellness | Holistic Healing, Sound Bath & Family Constellation",
  description: "Transform your life with holistic healing, subconscious work, and energy alignment. Private & Group sessions in Perth, Bali, and Bandung.",
  keywords: ["Chariea Aviya Wellness", "Family Constellation Perth", "Sound Healing Bali", "12-Week Transformation Program", "Breathwork Bali", "Holistic Healing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${garamond.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream text-dark antialiased">
        <LeadFormProvider>
          {children}
        </LeadFormProvider>
      </body>
    </html>
  );
}
