import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/global/container';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Siemens Service Center | Expert Appliance Repair & Maintenance',
  description:
    'Certified Siemens appliance repair and maintenance services. Fast, reliable repairs for washing machines, refrigerators, ovens & more. Book your appointment today!',
  keywords: [
    'Siemens service center',
    'Siemens appliance repair',
    'Siemens washing machine repair',
    'Siemens refrigerator repair',
    'home appliance repair',
  ],
  openGraph: {
    title: 'Siemens Service Center | Expert Appliance Repair',
    description:
      'Fast and certified Siemens appliance repairs. Same-day service available. Book now!',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cn(
        'h-full',
        'antialiased',
        geistSans.variable,
        geistMono.variable,
        'font-sans',
        inter.variable,
      )}
    >
      <body className='min-h-full flex flex-col' suppressHydrationWarning>
        <Navbar />
        <Container className='py-8'>{children}</Container>
      </body>
    </html>
  );
}
