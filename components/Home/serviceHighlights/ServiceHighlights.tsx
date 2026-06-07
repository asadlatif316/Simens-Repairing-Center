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
} from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/global/container';
import Cards from './cards';

const ServiceHighlights = () => {
  return (
    <section id='service-details' className='py-16'>
      <Container>
        <div>
          <h2>Common Appliance Problems We Solve</h2>
          <p>
            We handle a wide range of home appliance repair problems quickly and
            professionally. Browse our services below to find the solution you
            need.
          </p>
              </div>
              <Cards />
      </Container>
    </section>
  );
};

export default ServiceHighlights;
