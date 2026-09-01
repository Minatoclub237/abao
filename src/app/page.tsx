import Preloader from '@/components/Preloader';
import Hero from '@/components/sections/Hero';
import Metiers from '@/components/sections/Metiers';
import Intervention from '@/components/sections/Intervention';
import Blindage from '@/components/sections/Blindage';
import Marques from '@/components/sections/Marques';
import VitrerieCine from '@/components/sections/VitrerieCine';
import RideauCine from '@/components/sections/RideauCine';
import Zones from '@/components/sections/Zones';
import Chiffres from '@/components/sections/Chiffres';
import Reseau from '@/components/sections/Reseau';
import FinalCta from '@/components/sections/FinalCta';
import { StackUnder, StackOver } from '@/components/motion/StackReveal';

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <Metiers />
      <Intervention />
      <Blindage />
      <Marques />
      <VitrerieCine />
      <RideauCine />
      {/* la section Zones se fige, le final glisse par-dessus */}
      <StackUnder>
        <Zones />
        <Chiffres />
      </StackUnder>
      <StackOver>
        <Reseau />
        <FinalCta />
      </StackOver>
    </>
  );
}
