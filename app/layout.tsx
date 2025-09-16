import type { Metadata } from 'next';
import { Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';
import Layout from './components/Layout';

const font = Noto_Sans_Bengali({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'আমাদের বাজার',
  description: 'A responsive ecommerce for BD',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth md:scroll-auto">
      <body className={font.className + `  overflow-hidden`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}