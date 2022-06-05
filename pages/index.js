import React from "react";
import Layout from "../components/Layout";
import { Hero, Services } from "../screens/Home";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
    </Layout>
  );
}
