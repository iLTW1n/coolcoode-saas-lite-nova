import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../button';

const items = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'Product',
    href: '#',
  },
  {
    name: 'Pricing',
    href: '#',
  }
]

export const Header = () => {
  return (
    <header>
      <div className='container flex items-center justify-between h-20'>
        <div>Nova</div>
        <div className='hidden md:flex md:gap-8'>
          {items.map(item => (
            <Link
              href={item.href}
              key={item.name}
              className='transition font-medium text-sm text-gray-500 hover:text-black'
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div>
          <div className='hidden md:flex md:gap-4'>
            <Button type='white'>Contact Us</Button>
            <Button type='dark'>Learn More</Button>
          </div>
          <div className='md:hidden'>
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};
