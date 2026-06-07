'use client';

import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button
} from '@/components/ui';
import Link from 'next/link';
import { IoCallSharp } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { servicesData } from '@/lib/services';
import { useRef } from 'react';


const ServiceCard = () => {
  const plugin = useRef(
    Autoplay({
      delay: 3000,
    }),
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className='w-full'
    >
      <CarouselContent>
        {servicesData.map((service) => (
          <CarouselItem
            key={service.title}
            className='md:basis-1/2 lg:basis-1/3' // ← show 3 cards on desktop
          >
            <Card className=' pt-0 mb-4 cursor-pointer h-full'>
              {/* Image */}
              <CardHeader className='p-0'>
                <div className='relative w-full aspect-video overflow-hidden rounded-t-xl'>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className='object-cover hover:scale-105 transition-transform duration-300'
                  />
                </div>
              </CardHeader>

              {/* Content */}
              <CardContent className='text-left pt-4'>
                <CardTitle className='mb-2'>{service.title}</CardTitle>
                <CardDescription className='text-sm leading-relaxed'>
                  {service.description}
                </CardDescription>
              </CardContent>

              {/* Buttons */}
              <CardFooter>
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
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation buttons */}
      <CarouselPrevious className='md:hidden left-2' />
      <CarouselNext className='md:hidden right-2' />
    </Carousel>
  );
};

export default ServiceCard;
