import Logo from '../global/logo';
import { Button } from '../ui';
import Link from 'next/link';
import { IoCallSharp } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import FooterLogo from '../global/footerLogo';

const FooterContent = () => {
  return (
    <div className='md:col-span-2'>
      <FooterLogo />
      <p className='md:max-w-sm text-secondary mt-4 text-sm'>
        Welcome to Siemens Service Center, your most trusted partner in home
        appliance repair. We specialize in fast, reliable, and affordable repair
        services for all Siemens household appliances, backed by certified
        technicians and years of experience.
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
