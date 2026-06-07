import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { IoCallSharp } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import Container from '@/components/global/container';

const About = () => {
  return (
    <section id='about' className='py-16 bg-btn text-secondary'>
      <Container>
        <div className='grid md:grid-cols-2 gap-8 items-stretch'>
          {/* Left — Text */}
          <div className='flex flex-col justify-center'>
            <span className='text-xs font-bold tracking-widest uppercase mb-2'>
              About Us
            </span>
            <h2 className='text-3xl font-semibold mb-4 leading-snug'>
              Fast & Reliable Home Appliance Repair Services
            </h2>
            <p className='text-muted text-sm leading-relaxed mb-3'>
              Our team specializes in repairing home appliances of all types,
              with a focus on fast, reliable, and quality service. We are
              dedicated to diagnosing and fixing a wide range of household
              appliances, showing up on time and getting the job done right the
              first time.
            </p>
            <p className='text-muted text-sm leading-relaxed mb-6'>
              Trust us to restore your appliances quickly and efficiently,
              ensuring your home runs smoothly and you get back to your daily
              routine without any hassle.
            </p>
            <div className='flex gap-3 text-primary'>
              <Button variant={'outline'} asChild className='rounded-sm'>
                <Link href='tel:+97254744326'>
                  <IoCallSharp /> Call us
                </Link>
              </Button>
              <Button asChild variant='outline' className='rounded-sm'>
                <Link href='https://wa.me/97254744326' target='_blank'>
                  <FaWhatsapp /> WhatsApp
                </Link>
              </Button>
            </div>
          </div>

          {/* Right — Image with overlay */}
          <div className='relative rounded-xl overflow-hidden min-h-72'>
            <Image
              src='/images/technicians.jpg'
              alt='Siemens appliance repair UAE'
              fill
              className='object-cover'
            />
            {/* Dark gradient overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent' />

            {/* Overlay content */}
            <div className='absolute bottom-0 left-0 right-0 p-6 z-10'>
              <h2 className='text-white text-xl font-semibold mb-2 leading-snug'>
                Siemens Appliance Repair Services
              </h2>
              <p className='text-white/85 text-sm leading-relaxed mb-3'>
                From washing machines to gas ovens, our skilled technicians have
                the experience to diagnose and fix all types of Siemens
                appliance faults quickly, professionally, and at a fair price.
              </p>
              <div className='flex gap-2 flex-wrap'>
                {['Same-day service','5★ rated'].map((tag) => (
                  <span
                    key={tag}
                    className='bg-white/15 border border-white/25 text-white text-xs px-3 py-1 rounded-full'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
