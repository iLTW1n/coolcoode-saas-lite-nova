import { cva } from 'class-variance-authority';
import { ReactNode } from 'react';

type Props = {
  type?: 'dark' | 'white' | 'primary';
  children: ReactNode;
  className?: string;
};

export const Button = (props: Props) => {
  const { type, children, className } = props;
  const classes = cva(`cursor-pointer px-4 py-2 rounded-xs text-sm flex items-center gap-2 text-gray-900 ${className}`, {
    variants: {
      type: {
        dark: 'bg-black text-white hover:bg-gray-900',
        white: 'bg-white text-black border border-gray-300 hover:bg-gray-100',
        primary: 'bg-violet-500 text-white hover:bg-violet-600',
      },
    },
    defaultVariants: {
      type: 'dark',
    },
  });

  return <button className={classes({ type })}>{children}</button>;
};
