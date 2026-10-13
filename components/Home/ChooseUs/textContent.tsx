import Link from 'next/link';
import { IoCallSharp } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui';
import Stats from './stats';

const TextContent = () => {
  return (
    <div className='flex flex-col space-y-4 md:p-6'>
      <h2 className='text-2xl font-bold md:text-3xl md:font-semibold text-center md:text-left'>
        Why Choose Our Services
      </h2>
      <p className='text-center text-muted-foreground md:text-left'>
        When your appliance breaks down, you need a repair service you can
        actually trust. We show up on time, diagnose the problem honestly, and
        fix it right the first time.
      </p>
      <Stats />
      <div className='flex items-center justify-center gap-2 flex-wrap mt-4'>
        <Button variant={'outline'} asChild className='rounded-sm'>
          <Link href='tel:+971527315207'>
            <IoCallSharp />
            +971 52 731 5207
          </Link>
        </Button>
        <Button
          asChild
          variant='outline'
          className='rounded-sm bg-btn text-secondary'
        >
          <Link
            href='https://wa.me/971527315207'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaWhatsapp /> WhatsApp
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default TextContent;
