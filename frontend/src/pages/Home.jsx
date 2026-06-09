import HomePageTemplate from "@/templates/HomePageTemplate";
import { homePageData } from "@/data/homePageData";

export default function Home() {
  return <HomePageTemplate data={homePageData} />;
}
