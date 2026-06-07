import Container from '@/components/global/container';
import Cards from './cards';

const ServiceHighlights = () => {
  return (
    <section id='service-details' className='py-10 bg-secondary'>
      <Container>
        <div className='flex items-center justify-center flex-col'>
          <h2 className='text-2xl font-bold md:text-4xl text-center'>
            Common Appliance Problems We Solve
          </h2>
          <p className='text-muted-foreground md:mt-2 md:w-3xl text-center'>
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
