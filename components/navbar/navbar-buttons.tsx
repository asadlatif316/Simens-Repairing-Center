import { Button } from '../ui';
import { IoCallSharp } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const NavbarButtons = () => {
  return (
    <div className='mt-4 md:mt-0 flex items-center gap-2 ml-6'>
      <Button asChild className='md:hidden bg-btn rounded-sm'>
        <Link href='tel:+97254744326'>
          <span>
            <IoCallSharp />
          </span>
          +97254744326
        </Link>
      </Button>
      <Button asChild variant={'outline'} className='hidden md:flex rounded-sm'>
        <Link href='tel:+97254744326'>
          <span>
            <IoCallSharp />
          </span>
          +97254744326
        </Link>
      </Button>
      <Button asChild className='bg-btn rounded-sm'>
        <Link href='href="https://wa.me/97254744326"'>
          <span>
            <FaWhatsapp />
          </span>{' '}
          Whatsapp
        </Link>
      </Button>
    </div>
  );
};

export default NavbarButtons;
