import { ContactUs } from './sections/contact-us';
import { Counter } from './sections/counter';
import { Customers } from './sections/customers';
import { Hero } from './sections/hero';
import { OfferModernity } from './sections/offer-modernity';
import { OurFeatures } from './sections/our-features';
import { WeDo } from './sections/we-do';
import { WeOffer } from './sections/we-offer';

export const Home = () => {
  return (
    <>
      <Hero />
      <Counter />
      <WeOffer />
      <WeDo />
      <OfferModernity />
      <OurFeatures />
      <Customers />
      <ContactUs />
    </>
  );
};
