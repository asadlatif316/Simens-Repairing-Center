import Logo from "../global/logo"
import { Button } from "../ui";
import Link from "next/link";
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const FooterContent = () => {
    return (
      <div>
        <Logo />
        <p className='text-muted-foreground mt-4 text-sm'>
          Welcome to Siemens Service Center, your most trusted partner in home
          appliance repair. We specialize in fast, reliable, and affordable
          repair services for all Siemens household appliances, backed by
          certified technicians and years of experience.
        </p>
        <div className="flex items-center gap-x-2 mt-4">
          <Button asChild className=' bg-btn rounded-sm'>
            <Link href='tel:+97254744326'>
              <span>
                <IoCallSharp />
              </span>
              +97254744326
            </Link>
          </Button>
          <Button asChild className='bg-btn rounded-sm'>
            <Link href='href="https://wa.me/97254744326"'>
              <span>
                <FaWhatsapp />
              </span>{' '}
              Whatsapp
            </Link>
          </Button>
        </div>
      </div>
    );
}

export default FooterContent
