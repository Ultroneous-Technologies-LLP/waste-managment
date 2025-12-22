import { FC } from "react";

import {
  AboutUs,
  CitiesWeCovered,
  DrivingImpact,
  FAQ,
  GetMoreUpdates,
  HomeHero,
  IndustriesWeServe,
  OurAchievements,
  OurProcess,
  TransformingWaste,
  WasteManagementServices,
} from "@/components/home";
import fallbackHomeData from "@/content/home-page-data.json";

const Home: FC = () => {
  const strapiData = fallbackHomeData;

  const {
    hero,
    aboutUs,
    wasteManagementServices,
    industriesWeServe,
    ourProcess,
    citiesWeCovered,
    transformingWaste,
    drivingImpact,
    faq,
    getMoreUpdates,
    ourAchievements,
  } = strapiData;

  return (
    <>
      <HomeHero {...hero} />
      <AboutUs {...aboutUs} />
      <WasteManagementServices {...wasteManagementServices} />
      <IndustriesWeServe {...industriesWeServe} />
      <OurProcess {...ourProcess} />
      <TransformingWaste {...transformingWaste} />
      <CitiesWeCovered {...citiesWeCovered} />
      <DrivingImpact {...drivingImpact} />
      <FAQ {...faq} />
      <GetMoreUpdates {...getMoreUpdates} />
      <OurAchievements {...ourAchievements} />
    </>
  );
};

export default Home;
