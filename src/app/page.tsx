import { FC } from "react";

import {
  AboutUs,
  CitiesWeCovered,
  DrivingImpact,
  GetMoreUpdates,
  FAQ,
  HomeHero,
  IndustriesWeServe,
  OurProcess,
  OurAchievements,
  TransformingWaste,
  WasteManagementServices,
} from "@/components/home";
import data from "@/content/home-page-data.json";
import { homeData } from "@/types/home-type";

const Home: FC = () => {
  const {
    aboutUsSection,
    citiesWeCoveredSection,
    drivingImpactSection,
    faqSections,
    getMoreUpdatesSection,
    heroSection,
    industriesWeServeSection,
    ourAchievementsSection,
    ourProcessSection,
    transformingWasteSection,
    wasteManagementServicesSection,
  }: homeData = data;
  return (
    <>
      <HomeHero data={heroSection} />
      <AboutUs data={aboutUsSection} />
      <WasteManagementServices data={wasteManagementServicesSection} />
      <IndustriesWeServe data={industriesWeServeSection} />
      <OurProcess data={ourProcessSection} />
      <TransformingWaste data={transformingWasteSection} />
      <CitiesWeCovered data={citiesWeCoveredSection} />
      <DrivingImpact data={drivingImpactSection} />
      <FAQ data={faqSections} />
      <GetMoreUpdates data={getMoreUpdatesSection} />
      <OurAchievements data={ourAchievementsSection} />
    </>
  );
};

export default Home;
