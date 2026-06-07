import Container from '@/components/global/container'
import React from 'react'
import ServiceCardList from './seriviceCardsList';

const Service = () => {
  return (
    <Container>
      <h2>Appliance Repair Services</h2>
      <p>
        We know how frustrating a broken appliance can be, which is why we offer
        fast, affordable, and dependable repair services for all Siemens
        appliances. Our technicians work efficiently to get your appliance back
        up and running with minimal disruption to your day
      </p>
      <ServiceCardList/>
    </Container>
  );
}

export default Service

