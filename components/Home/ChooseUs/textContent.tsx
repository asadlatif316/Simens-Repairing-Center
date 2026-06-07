import Link from 'next/link';
import { IoCallSharp } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui';

const TextContent = () => {
  return (
    <div>
      <h2>Why Choose Our Services</h2>
      <p>
        When your appliance breaks down, you need a repair service you can
        actually trust. We show up on time, diagnose the problem honestly, and
        fix it right the first time.
      </p>
      <div className='flex items-center gap-2 flex-wrap'>
        <Button asChild variant='secondary' className='rounded-sm'>
          <Link href='tel:+97254744326'>
            <IoCallSharp />
            +97254744326
          </Link>
        </Button>
        <Button asChild className='bg-btn rounded-sm'>
          <Link
            href='https://wa.me/97254744326'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaWhatsapp />
            WhatsApp
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default TextContent;
