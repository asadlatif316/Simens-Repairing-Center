import Container from '@/components/global/container';
import About from '@/components/Home/About/about';
import ChooseUs from '@/components/Home/ChooseUs/ChooseUs';
import Hero from '@/components/Home/Hero/Hero';
import ServiceHighlights from '@/components/Home/serviceHighlights/ServiceHighlights';
import Service from '@/components/Home/Services/Service';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <ChooseUs />
      <ServiceHighlights/>
    </>
  );
};

export default Home;
