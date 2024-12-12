"use client";

import { AnimatedComponent } from "@/animations/ScrollAnimation";
import { fadeInUp } from "@/animations/animations";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <AnimatedComponent
          variants={fadeInUp}
          transition={{ delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            {title}
          </h2>
        </AnimatedComponent>
        <AnimatedComponent
          variants={fadeInUp}
          transition={{ delay: 0.45, ease: "easeOut" }}
        >
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {paragraph}
          </p>
        </AnimatedComponent>
      </div>
    </>
  );
};

export default SectionTitle;
