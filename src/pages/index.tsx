import React from "react";
import DefaultLayout from "@/layout";
import Section1 from "@/components/Index/Section1";
import Section2 from "@/components/Index/Section2";
import Section3 from "@/components/Index/Section3";
import Section4 from "@/components/Index/Section4";
import Section6 from "@/components/Index/Section6";
import Section7 from "@/components/Index/Section7";
import Section8 from "@/components/Index/Section8";
import Section9 from "@/components/Index/Section9";

const IndexPage: React.FC = () => {
  return (
    <DefaultLayout header={{ isIndex: true }}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
    </DefaultLayout>
  );
};

export default IndexPage;
