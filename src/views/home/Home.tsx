import { Counter } from './sections/counter';
import { Hero } from './sections/hero';
import { WeDo } from './sections/we-do';
import { WeOffer } from './sections/we-offer';

export const Home = () => {
  return (
    <>
      <Hero />
      <Counter />
      <WeOffer />
      <WeDo />
    </>
  );
};
