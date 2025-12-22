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
// import { axiosInstance } from "@/utils/axios";

// import { HomePageDataTypes } from "./types";

// async function HomeData(): Promise<HomePageDataTypes> {
//   try {
//     const response = await axiosInstance.get<HomePageDataTypes>("/waste-managment?pLevel=7");
//     return response.data;
//   } catch (error: any) {
//     console.error(error);
//     return fallbackHomeData;
//   }
// }

const Home: FC = () => {
  // const strapiData = await HomeData();
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
