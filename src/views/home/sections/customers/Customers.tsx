import { CircleCheckBig } from 'lucide-react';
import Image from 'next/image';
import avatar from '@/assets/avatar.jpg';

const items = [
  {
    name: 'John Doe',
    role: 'CEO, Company A',
    testimonial: 'This product has transformed our business. The team loves it!',
    timestamp: '2 days ago',
    color: 'border-violet-500/20',
  },
  {
    name: 'Jane Smith',
    role: 'CTO, Company B',
    testimonial: 'Incredible service and support. Highly recommend to anyone!',
    timestamp: '1 week ago',
    color: 'border-yellow-500/20',
  },
  {
    name: 'Alice Johnson',
    role: 'Manager, Company C',
    testimonial: 'A game-changer in our industry. Exceptional quality and reliability.',
    timestamp: '3 weeks ago',
    color: 'border-green-500/20',
  },
];

export const Customers = () => {
  return (
    <div className='container py-10 md:py-20 text-center'>
      <span className='text-violet-500 font-semibold text-sm tracking-widest'>TESTIMONIALS</span>
      <h1 className='text-2xl font-semibold mb-6 md:text-4xl md:mb-8'>
        Hear from our customers
      </h1>
      <ul className='grid gap-3 md:grid-cols-3 md:gap-6'>
        {items.map((item, index) => (
          <li
            key={index}
            className={`bg-white border-12 ${item.color} rounded-xs p-6 text-left flex flex-col`}
          >
            <div className='flex gap-2 items-center'>
              <Image
                width={48}
                height={48}
                src={avatar}
                alt='Avatar Image'
                className='object-cover w-12 h-12 rounded-full'
              />
              <div>
                <h2 className='text-lg font-semibold'>{item.name}</h2>
                <p className='text-sm text-gray-500'>{item.role}</p>
              </div>
            </div>
            <p className='text-gray-700 mb-2 mt-4'>&quot;{item.testimonial}&quot;</p>
            <span className='text-xs text-gray-400 mt-auto'>{item.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
