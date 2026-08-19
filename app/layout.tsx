import './globals.css';
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F9F6F0' },
    { media: '(prefers-color-scheme: dark)', color: '#18120D' },
  ],
};
import { ThemeProvider } from '@/context/ThemeContext';
import { CartProvider } from '@/context/CartContext';
import { ModalProvider } from '@/context/ModalContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReservationModal from '@/components/Modals/ReservationModal';
import GalleryLightbox from '@/components/Modals/GalleryLightbox';
import Toast from '@/components/Toast';

export const metadata: Metadata = {
  title: 'Himalayan Coffee House | Specialty Mountain Roasts & Heritage Chai | Toronto',
  description: 'Experience artisan high-altitude single-origin coffee, traditional copper-kettle masala chai, and fresh baked pastries at 2552 Yonge St, Toronto.',
  keywords: 'Himalayan coffee, specialty coffee Toronto, masala chai, artisan café Midtown, single origin roast',
  openGraph: {
    title: 'Himalayan Coffee House | Specialty Mountain Roasts & Heritage Chai',
    description: 'Artisan high-altitude coffee & authentic copper-kettle masala chai in Toronto.',
    url: 'https://himalayancoffee.ca',
    siteName: 'Himalayan Coffee House',
    locale: 'en_CA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <CartProvider>
            <ModalProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
              <ReservationModal />
              <GalleryLightbox />
              <Toast />
            </ModalProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
