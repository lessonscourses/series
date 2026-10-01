import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCta from '@/components/StickyCta';
import Interactions from '@/components/Interactions';

export const metadata = {
  title: 'Legends - Private Investor Dinners',
  description: 'Private networking dinners for investors, October - December 2026: Singapore, Dubai, Abu Dhabi, Riyadh, New York, Zurich, London, Palm Beach.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCta />
        <Interactions />
      </body>
    </html>
  );
}
