import type { Metadata } from 'next';
import './globals.css';
import './commercial.css';

export const metadata: Metadata = {
  title: 'Haunted | Tienda Online',
  description: 'Termos, bazar, hogar, regalos y mucho más. Delivery y envíos al interior.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}