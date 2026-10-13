import Links from './links';
import Sidebar from './sidebar';
import NavbarButtons from './navbar-buttons';
import Container from '../global/container';
import Logo from '../global/logo';
const Navbar = () => {
  return (
    <Container className='flex items-center justify-between pt-6 md:pt-8 pb-6'>
          <Logo />
          <div className='md:hidden'>
              <Sidebar/>
          </div>
      <div className='hidden md:flex items-center'>
        <Links />
        <NavbarButtons />
          </div>
    </Container>
  );
};

export default Navbar;
