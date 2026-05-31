import React from 'react'
import Image from 'next/image';
const ImagesCollage = () => {
  return (
    <div className='flex flex-col gap-2 p-10'>
      {/* Big square image */}
      <div className='relative w-full aspect-square overflow-hidden  rounded-xl'>
        <Image
          src='/service/dishwasher.jpg'
          alt='Certified Siemens appliance repair technician UAE'
          fill
          className='object-cover hover:scale-110 transition-transform duration-150 ease-in'
          priority
        />
      </div>

      {/* 3 small squares below */}
      <div className='grid grid-cols-3 gap-2'>
        <div className='relative aspect-square overflow-hidden  rounded-xl'>
          <Image
            src='/service/wahsingmachine.jpg'
            alt='Siemens washing machine repair'
            fill
            className='object-cover hover:scale-110 transition-transform duration-150 ease-in'
          />
        </div>
        <div className='relative aspect-square overflow-hidden  rounded-xl'>
          <Image
            src='/service/gas-stove-repair.webp'
            alt='Siemens fridge repair UAE'
            fill
            className='object-cover hover:scale-110 transition-transform duration-150 ease-in'
          />
        </div>
        <div className='relative aspect-square overflow-hidden  rounded-xl'>
          <Image
            src='/service/repairing-fridge.jpg'
            alt='Siemens dishwasher repair'
            fill
            className='object-cover hover:scale-110 transition-transform duration-150 ease-in'
          />
        </div>
      </div>
    </div>
  );
}

export default ImagesCollage



