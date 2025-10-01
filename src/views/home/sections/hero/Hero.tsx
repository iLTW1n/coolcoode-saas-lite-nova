import { Button } from '@/components/button';
import { CircleCheckBig } from 'lucide-react';
import Image from 'next/image';
import imageHero from '@/assets/illustration/person-checklist.svg';

const items = [
  'Impress your <strong>customers.</strong>',
  'Stylish, modern <strong>design.</strong>',
  'Launch your website <strong>faster.</strong>',
];

export const Hero = () => {
  return (
    <div className='container gap-12 py-10 md:flex md:py-20'>
      <div className='md:max-w-lg'>
        <h1 className='text-4xl font-bold lg:text-5xl'>
          A modern template to power up your <span className='text-violet-500'>business.</span>
        </h1>
        <p className='text-gray-900 my-4 md:text-lg md:my-6'>
          Get started with our template and take your business to the next level.
        </p>
        <ul className='grid gap-3'>
          {items.map((item, index) => (
            <li key={index} className='flex items-center gap-2 text-gray-900'>
              <CircleCheckBig size={20} color='#8e51ff' />
              <p dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
        <div className='mt-8 flex gap-4 md:mt-12'>
          <Button type='primary' className='md:px-6 md:py-3'>
            Learn More
          </Button>
          <Button type='white' className='md:px-6 md:py-3'>
            Contact Us
          </Button>
        </div>
      </div>
      <div className='hidden md:flex md:items-center'>
        <Image width={500} height={500} src={imageHero.src} alt='Hero Image' />
      </div>
    </div>
  );
};
