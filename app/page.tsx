import Container from '@/components/global/container';
import About from '@/components/Home/About/about';
import Hero from '@/components/Home/Hero/Hero';
import Service from '@/components/Home/Services/Service';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Service/>
    </>
  );
};

export default Home;
