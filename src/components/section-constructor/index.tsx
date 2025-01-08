import React from "react";
import HeroGenerator from "../hero-generator/hero-generator";

export interface SectionConstructorType {
  hero: {
    title: string;
    description: string;
  };
}

function SectionConstructor({ hero }: SectionConstructorType) {
  return (
    <>
      <HeroGenerator hero={hero} />
    </>
  );
}

export default SectionConstructor;
