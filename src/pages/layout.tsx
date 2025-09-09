import { Footer, Header } from "@/components/layout";
import { ReactNode } from "react";
import data from "@/content/layout.json";
import { layoutData } from "@/types/layout-type";

export default function Layout({ children }: { children: ReactNode }) {
  const layoutData = data as layoutData;
  return (
    <>
      <Header data={layoutData.header} />
      <main>{children}</main>
      <Footer data={layoutData.footer} />
    </>
  );
}
