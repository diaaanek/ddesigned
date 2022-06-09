import cn from "classnames";
import Layout from "../components/Layout";
import { Hero, Testimonials } from "../screens/About";
import CTA from "../components/CTA";

const About = () => {
  return (
    <Layout>
      <Hero />
      <Testimonials />
      <CTA
        number="02"
        background="#92A5EF"
        title="30% Discount"
        button="Learn More"
      />
    </Layout>
  );
};

export default About;
