import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Logistik Indonesia - Solusi Pengiriman Terpercaya',
  description: 'Layanan logistik dan pengiriman terpercaya untuk seluruh Indonesia',
  metadataBase: new URL('https://logistik.co.id'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}