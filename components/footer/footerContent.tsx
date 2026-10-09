import Logo from '../global/logo';
import { Button } from '../ui';
import Link from 'next/link';
import { IoCallSharp } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';

const FooterContent = () => {
  return (
    <div className='md:col-span-2'>
      <Logo variant='light'/>
      <p className='md:max-w-sm text-secondary mt-4 text-sm'>
        Welcome to our Home Appliance Service Center, your trusted partner for
        reliable household appliance repair. We provide fast, affordable, and
        dependable repair services for all major home appliance brands, handled
        by certified technicians with years of hands-on experience.
      </p>
      <div className='flex items-center gap-x-2 mt-4'>
        <Button asChild variant={'outline'} className='rounded-sm'>
          <Link href='tel:+97254744326'>
            <span>
              <IoCallSharp />
            </span>
            +97254744326
          </Link>
        </Button>
        <Button variant={'outline'} asChild className='rounded-sm'>
          <Link href='href="https://wa.me/97254744326"'>
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
