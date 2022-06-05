import React from "react";
import Layout from "../components/Layout";
import { Hero, Projects, Services } from "../screens/Home";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Projects />
    </Layout>
  );
}
