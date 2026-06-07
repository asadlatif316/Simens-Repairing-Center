import Container from '@/components/global/container'
import React from 'react'
import ServiceCardList from './seriviceCardsList';

const Service = () => {
  return (
    <section className='bg-secondary py-10 min-h-96'>
      <Container className='text-center '>
        <div className='flex items-center justify-center flex-col'>
          <h2 className='text-2xl font-bold md:text-4xl'>
            Appliance Repair Services
          </h2>
          <p className='text-muted-foreground md:mt-2 md:w-3xl'>
            We know how frustrating a broken appliance can be, which is why we
            offer fast, affordable, and dependable repair services for all
            Siemens appliances. Our technicians work efficiently to get your
            appliance back up and running with minimal disruption to your day
          </p>
        </div>
        <ServiceCardList />
      </Container>
    </section>
  );
}

export default Service

