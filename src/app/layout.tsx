import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ["latin", "latin-ext"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://easyenergy.pl'), // Assuming this is the real domain
  title: {
    template: "%s | EasyEnergy",
    default: "EasyEnergy | Optymalizacja Kosztów Energii i Gazu dla Biznesu",
  },
  description: "Zwiększ zyski swojej firmy dzięki optymalizacji kosztów gazu i prądu. Kompleksowe doradztwo energetyczne, audyty efektywności i profesjonalne wsparcie prawno-procesowe dla Twojego przedsiębiorstwa.",
  keywords: [
    "doradztwo energetyczne", 
    "energia dla firm", 
    "gaz dla biznesu", 
    "optymalizacja kosztów", 
    "zmiana sprzedawcy prądu", 
    "kfe", 
    "białe certyfikaty", 
    "easyenergy", 
    "odkup energii"
  ],
  authors: [{ name: "EasyEnergy" }],
  creator: "EasyEnergy",
  publisher: "EasyEnergy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/seo-logo.png',
    shortcut: '/seo-logo.png',
    apple: '/seo-logo.png',
  },
  openGraph: {
    title: "EasyEnergy | Optymalizacja Kosztów Energii",
    description: "Osiągaj wyższe zyski z optymalizacji kosztów gazu i prądu. Wsparcie na każdym kroku od doradztwa do audytu.",
    url: "https://easyenergy.pl",
    siteName: "EasyEnergy",
    images: [
      {
        url: '/seo-logo.png',
        width: 1200,
        height: 630,
        alt: 'EasyEnergy - Twoja energia. Pewna przyszłość.',
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${roboto.className} ${roboto.variable} antialiased font-sans`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
