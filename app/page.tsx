import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';
import { About } from '@/components/sections/About';
import { Blog } from '@/components/sections/Blog';
import { Contact } from '@/components/sections/Contact';
import { FAQ } from '@/components/sections/FAQ';
import { Hero } from '@/components/sections/Hero';
import { Method } from '@/components/sections/Method';
import { Pricing } from '@/components/sections/Pricing';
import { Services } from '@/components/sections/Services';
import { Stack } from '@/components/sections/Stack';
import { TrustStrip } from '@/components/sections/TrustStrip';

export default function HomePage(): JSX.Element {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Method />
        <About />
        <Stack />
        <Pricing />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
