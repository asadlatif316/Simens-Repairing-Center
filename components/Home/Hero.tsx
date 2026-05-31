import Container from '../global/container';
import { Button } from '../ui';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { IoCallSharp } from 'react-icons/io5';
import ImagesCollage from './imgesCollage';



const Hero = () => {
  return (
    <section className='min-h-96 bg-secondary'>
      <Container className=' grid py-6'>
        <div className=''>
          <div>
            {' '}
            <span className='text-xs font-bold inline text-btn rounded-3xl'>
              Siemens Authorized Service Center - UAE
            </span>
          </div>
          <h1 className='text-3xl font-bold mt-2'>
            Siemens Home Appliance Repair & Maintenance
          </h1>
          <p className='mt-4 text-muted-foreground text-sm'>
            From washing machines to gas ovens, our certified Siemens
            technicians diagnose and repair all faults, fast.
          </p>
          <h2 className='font-bold text-lg text-btn mt-4'>Book your repair today!</h2>
          <div className='mt-2 flex justify-center items-center gap-2'>
            <Button asChild variant={'outline'} className='rounded-sm'>
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
          <ImagesCollage/>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
