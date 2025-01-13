"use client";

import { useTranslations } from "next-intl";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import { AnimatedComponent } from "@/animations/ScrollAnimation";
import { fadeInUp } from "@/animations/animations";
import useReactQueryAction from "hooks/use-react-query-action";
import { SectionListResponse } from "@/types/section.types";

const Features = () => {
  const t = useTranslations("features");
  const { data } =
    useReactQueryAction<SectionListResponse>("services/sections/");

  if (data)
    return (
      <>
        <section id="xizmatlar" className="py-16 md:py-20 lg:py-28">
          <div className="container">
            <SectionTitle
              title={t("title")}
              paragraph={t("description")}
              center
            />

            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
              {data.results.map((feature, i) => (
                <AnimatedComponent
                  key={feature.id}
                  variants={fadeInUp}
                  transition={{ delay: i * 0.15, ease: "easeOut" }}
                >
                  <SingleFeature feature={feature} />
                </AnimatedComponent>
              ))}
            </div>
          </div>
        </section>
      </>
    );
};

export default Features;
