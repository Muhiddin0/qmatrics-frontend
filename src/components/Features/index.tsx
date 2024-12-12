import { useTranslations } from "next-intl";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { AnimatedComponent } from "@/animations/ScrollAnimation";
import { fadeInUp } from "@/animations/animations";

const Features = () => {
  const t = useTranslations("features");

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Bizning xizmatlarimiz"
            paragraph={t("description")}
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, i) => (
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
