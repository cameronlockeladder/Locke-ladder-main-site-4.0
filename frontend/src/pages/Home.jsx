import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Hero from "@/components/home/Hero";
import DirectAnswer from "@/components/home/DirectAnswer";
import WhatWeDo from "@/components/home/WhatWeDo";
import CostRanges from "@/components/home/CostRanges";
import HowWeWork from "@/components/home/HowWeWork";
import Founder from "@/components/home/Founder";
import ProjectProof from "@/components/home/ProjectProof";
import WhereWeWork from "@/components/home/WhereWeWork";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Nav />
      <main data-testid="home-page">
        <Hero />
        <DirectAnswer />
        <WhatWeDo />
        <CostRanges />
        <HowWeWork />
        <Founder />
        <ProjectProof />
        <WhereWeWork />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
