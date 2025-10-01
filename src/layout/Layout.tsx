import { Header } from '@/components/header';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
};
