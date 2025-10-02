import { Counter } from './sections/counter';
import { Hero } from './sections/hero';
import { WeOffer } from './sections/we-offer';

export const Home = () => {
  return (
    <>
      <Hero />
      <Counter />
      <WeOffer />
    </>
  );
};
