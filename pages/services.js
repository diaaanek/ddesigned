import React from "react";
import CTA from "../components/CTA";
import Layout from "../components/Layout";
import News from "../components/News";
import { Hero } from "../screens/Services";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <News />
    </Layout>
  );
}