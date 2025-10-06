import { Button } from '@/components/button';
import Image from 'next/image';
import imageHero from '@/assets/illustration/nice-to-meet-you.svg';
import { Input } from '@/components/input';

export const ContactUs = () => {
  return (
    <div className='container gap-12 py-10 md:flex md:py-20 md:gap-20 md:items-center'>
      <div className='hidden md:flex md:items-center'>
        <Image width={500} height={500} src={imageHero.src} alt='Hero Image' />
      </div>
      <div className='md:max-w-lg'>
        <span className='text-violet-500 font-semibold text-sm tracking-widest mb-2 block'>GET IN TOUCH</span>
        <h1 className='text-2xl font-semibold md:text-5xl'>
          Start your Nova journey here.
        </h1>
        <p className='text-gray-600 my-4 md:my-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.
        </p>
        <div className='grid gap-4'>
          <div>
            <span className='text-sm font-medium text-gray-700 mb-2'>Name</span>
            <Input placeholder='Peter' />
          </div>
          <div>
            <span className='text-sm font-medium text-gray-700 mb-2'>Email</span>
            <Input placeholder='you@example.com' />
          </div>
        </div>
        <div className='mt-8'>
          <Button type='primary' className='w-full md:px-6 md:py-3'>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
