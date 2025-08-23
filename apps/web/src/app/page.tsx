'use client';

import CallToAction from '../components/call-to-action';
import ContentSection from '../components/content';
// import CommunitySection from '../components/content-6';
import Feature3 from '../components/features';
import FooterSection from '../components/footer';
import HeroSection from '../components/hero-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Feature3 />
      <ContentSection />
      {/* <CommunitySection /> */}
      <CallToAction />
      <FooterSection />
    </main>
  );
}
