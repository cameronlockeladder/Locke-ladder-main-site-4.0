import { Seo } from "@/components/seo/Seo";
import { buildHomeSchema } from "@/components/seo/schemaBuilders";
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

// Data-driven homepage template. Render with: <HomePageTemplate data={homePageData} />
export default function HomePageTemplate({ data }) {
  return (
    <>
      <Seo seo={data.seo} schema={buildHomeSchema(data)} />
      <Nav />
      <main data-testid="home-page">
        <Hero hero={data.hero} />
        <DirectAnswer data={data.directAnswer} />
        <WhatWeDo data={data.whatWeDo} />
        <CostRanges data={data.costRanges} />
        <HowWeWork data={data.howWeWork} />
        <Founder data={data.founder} />
        <ProjectProof data={data.projectProof} />
        <WhereWeWork data={data.whereWeWork} />
        <Faq data={data.faq} />
        <FinalCta data={data.finalCta} />
      </main>
      <Footer />
    </>
  );
}
