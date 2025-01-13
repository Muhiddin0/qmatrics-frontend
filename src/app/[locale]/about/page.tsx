"use client";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useTranslations } from "next-intl";

const AboutPage = () => {
  const t = useTranslations("about");

  return (
    <>
      <Breadcrumb pageName={t("title")} description={t("description")} />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
