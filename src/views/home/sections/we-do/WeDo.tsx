import { Button } from '@/components/button';
import { ArrowRight, CircleCheckBig } from 'lucide-react';
import Image from 'next/image';
import imageHero from '@/assets/illustration/financial-data.svg';

const items = [
  '<strong>Professional layout</strong>',
  '<strong>Fully responsive design</strong>',
  '<strong>Amazing looking animations</strong>',
];

export const WeDo = () => {
  return (
    <div className='container gap-12 py-10 md:flex md:py-20 md:gap-20'>
      <div className='hidden md:flex md:items-center'>
        <Image width={500} height={500} src={imageHero.src} alt='Hero Image' />
      </div>
      <div className='md:max-w-lg'>
        <h1 className='text-2xl font-semibold md:text-4xl'>
          Design and develop faster than ever with Nova
        </h1>
        <p className='text-gray-600 my-4 md:my-6'>
          Helping your company spread its brand across the web ease and style.
        </p>
        <ul className='grid gap-3'>
          {items.map((item, index) => (
            <li key={index} className='flex items-center gap-2 text-gray-900'>
              <CircleCheckBig size={20} className='text-gray-900' />
              <p dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
        <div className='mt-8 md:mt-12'>
          <Button type='white' className='md:px-6 md:py-3'>
            Learn more <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
