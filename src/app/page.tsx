/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";

import {
  AboutUs,
  CitiesWeCovered,
  HomeHero,
  IndustriesWeServe,
  OurProcess,
  TransformingWaste,
  WasteManagementServices,
} from "@/components";
import fallbackHomeData from "@/content/home-page-data.json";
import { axiosInstance } from "@/utils/axios";

import { HomePageDataTypes } from "./types";

async function HomeData(): Promise<HomePageDataTypes> {
  try {
    const response = await axiosInstance.get<{ data: HomePageDataTypes }>(
      "/waste-managment?pLevel=7"
    );
    return response.data;
  } catch (error: any) {
    console.error(error);
    return fallbackHomeData;
  }
}

const Home: FC = async () => {
  const strapiData = await HomeData();

  const {
    hero,
    aboutUs,
    wasteManagementServices,
    industriesWeServe,
    ourProcess,
    citiesWeCovered,
    transformingWaste,
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
    </>
  );
};

export default Home;

//       <DrivingImpact data={drivingImpactSection} />
//       <FAQ data={faqSections} />
//       <GetMoreUpdates data={getMoreUpdatesSection} />
//       <OurAchievements data={ourAchievementsSection} />
