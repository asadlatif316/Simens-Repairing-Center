import { serviceHighlights } from '@/lib/serviceHighlights';
import { IoCallSharp } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui';
import Link from 'next/link';
import Image from 'next/image';


const Cards = () => {
  return (
    <div className='py-6'>
      <div className='flex flex-col gap-6'>
        {serviceHighlights.map((service, index) => (
          <Card
            key={service.title}
            id={service.href.replace('#', '')}
            className={`flex flex-col space-y-4 md:flex-row overflow-hidden p-b-4 gap-0
              ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}
            `}
          >
            {/* Image */}
            <div className='relative w-full md:w-2/5 aspect-video md:aspect-auto shrink-0'>
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className='object-cover'
              />
            </div>

            {/* Content */}
            
              <CardHeader>
                <CardTitle className='text-xl'>{service.title}</CardTitle>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className='flex flex-col gap-4'>
                {/* Problems */}
                <div>
                  <p className='text-sm font-semibold mb-2'>Common Problems</p>
                  <ul className='grid grid-cols-2 gap-x-4 gap-y-1'>
                    {service.problems.map((problem) => (
                      <li
                        key={problem}
                        className='text-sm text-muted-foreground flex items-center gap-2'
                      >
                        <span className='w-1.5 h-1.5 rounded-full bg-btn shrink-0' />
                        {problem}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Closing */}
                <p className='text-sm text-muted-foreground italic'>
                  {service.closing}
                </p>
              </CardContent>

              <CardFooter className='gap-3 flex-wrap'>
                <Button asChild variant='outline' className='rounded-sm'>
                  <Link href='tel:+97254744326'>
                    <IoCallSharp />
                    Call Us
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
              </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Cards
