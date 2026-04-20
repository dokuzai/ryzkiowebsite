import { useState } from 'react';
import { COPY } from './copy';
import Nav from './components/Nav';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ProductShot from './components/ProductShot';
import Metrics from './components/Metrics';
import Testimonials from './components/Testimonials';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import CtaBand from './components/CtaBand';
import Footer from './components/Footer';

const PALETTE = ['#E6DED2', '#DCCFBE', '#D2BFA8', '#C9AE92', '#C09E7C'];

function ConstructionBanner() {
  return (
    <div className="construction-banner">
      <span className="construction-icon">&#9888;</span>
      <span>Sito in costruzione — Site under construction</span>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState('it');
  const t = COPY[lang];

  return (
    <>
      <ConstructionBanner />
      <Nav lang={lang} setLang={setLang} t={t} />
      <Hero t={t} palette={PALETTE} />
      <HowItWorks t={t} palette={PALETTE} />
      <ProductShot t={t} palette={PALETTE} />
      <Metrics t={t} palette={PALETTE} />
      <Testimonials t={t} palette={PALETTE} />
      <Integrations t={t} palette={PALETTE} />
      <Pricing t={t} palette={PALETTE} />
      <CtaBand t={t} palette={PALETTE} />
      <Footer t={t} />
    </>
  );
}
