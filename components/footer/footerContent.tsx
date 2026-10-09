import Logo from '../global/logo';
import { Button } from '../ui';
import Link from 'next/link';
import { IoCallSharp } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';

const FooterContent = () => {
  return (
    <div className='md:col-span-2'>
      <Logo variant='light' />
      <p className='md:max-w-sm text-secondary mt-4 text-sm'>
        Welcome to our Home Appliance Service Center, your trusted partner for
        reliable household appliance repair. We provide fast, affordable, and
        dependable repair services for all major home appliance brands, handled
        by certified technicians with years of hands-on experience.
      </p>
      <div className='flex items-center gap-x-2 mt-4'>
        <Button asChild variant={'outline'} className='rounded-sm'>
          <Link href='tel:+971527315207'>
            <span>
              <IoCallSharp />
            </span>
            +971 52 731 5207
          </Link>
        </Button>
        <Button variant={'outline'} asChild className='rounded-sm'>
          <Link target='_blank' href='https://wa.me/971527315207'>
            <span>
              <FaWhatsapp />
            </span>{' '}
            Whatsapp
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default FooterContent;
