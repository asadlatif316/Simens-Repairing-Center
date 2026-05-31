import { links } from '@/lib/links';
import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui';
import { IoMdMenu } from 'react-icons/io';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import NavbarButtons from './navbar-buttons';
const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <IoMdMenu className='w-7 h-7' />
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className='font-semibold'>Siemens Service Center</SheetTitle>
          <SheetDescription>
            Fast & certified Siemens appliance repair. Book your appointment
            today!
          </SheetDescription>
        </SheetHeader>
        <ul className='flex flex-col px-6 space-y-3'>
          {links.map((item) =>
            item.children?.length ? (
              <li key={item.href}>
                <Collapsible>
                  <CollapsibleTrigger className='flex items-center gap-4 text-base'>
                    {item.label}
                    <ChevronDown className='w-4 h-4' />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ul className=' mt-1 flex flex-col gap-y-1'>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <SheetClose>
                            <Link className='text-muted-foreground' href={child.href}>{child.label}</Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              </li>
            ) : (
              <li key={item.href}>
                <Link className='text-base' href={item.href}>
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <NavbarButtons />
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
