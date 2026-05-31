import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/global/container';
import Footer from '@/components/footer/Footer';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
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
      className={cn('h-full', 'antialiased', openSans.variable, 'font-sans')}
    >
      <body className='min-h-full flex flex-col' suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
