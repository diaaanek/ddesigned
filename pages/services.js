import React from "react";
import CTA from "../components/CTA";
import Layout from "../components/Layout";
import News from "../components/News";
import { Hero, Pricing } from "../screens/Services";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Pricing />
      <CTA
        number="02"
        background="#92A5EF"
        title="30% Discount"
        button="Learn More"
      />
      <News number="03" />
    </Layout>
  );
}
