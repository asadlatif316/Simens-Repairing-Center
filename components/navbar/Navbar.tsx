import Links from './links';
import Sidebar from './sidebar';
import NavbarButtons from './navbar-buttons';
import Container from '../global/container';
import Logo from '../global/logo';
const Navbar = () => {
  return (
    <Container className='flex items-center justify-between'>
          <Logo />
          <div className='md:hidden'>
              <Sidebar/>
          </div>
      <div className='hidden md:flex'>
        <Links />
        <NavbarButtons />
          </div>
    </Container>
  );
};

export default Navbar;
