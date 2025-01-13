import AboutSectionOne from "@/components/About/AboutSectionOne";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { getSeoConfig } from "@/config/site";
import { Metadata } from "next";

export const generateMetadata = ({ params: { locale } }): Metadata => {
  locale as Lang;
  return getSeoConfig(locale);
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Features />
      <Brands />
      <Blog />
      <Contact />
    </>
  );
}
