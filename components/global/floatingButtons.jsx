import Link from 'next/link';
import { IoCallSharp } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingContact = () => {
  return (
    <>
      {/* Call - bottom left */}
      <Link
        href='tel:+971527315207'
        aria-label='Call us'
        className='fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1E3A8A] text-white shadow-lg transition hover:scale-110 hover:bg-[#1E3A8A]/90'
      >
        <IoCallSharp size={26} />
      </Link>

      {/* WhatsApp - bottom right */}
      <Link
        href='https://wa.me/971527315207?text=Hello%2C%20I%20need%20an%20appliance%20repair'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Chat on WhatsApp'
        className='fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:bg-[#1ebe5d]'
      >
        <FaWhatsapp size={30} />
      </Link>
    </>
  );
};

export default FloatingContact;
