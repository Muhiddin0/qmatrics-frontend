"use client";
import Image from "next/image";

import { useTranslations } from "next-intl";

import { MdOutlineCall } from "react-icons/md";

import { getSeoConfig, siteConfig } from "@/config/site";

import { Link } from "@/i18n/routing";
import { AnimatedComponent } from "@/animations/ScrollAnimation";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/animations/animations";

import LogoDark from "@/assets/logo-dark.png";
import LogoLight from "@/assets/logo-light.png";
import { useParams } from "next/navigation";

const Hero = () => {
  const t = useTranslations("hero");
  const { locale }: { locale: Lang } = useParams();

  const seo = getSeoConfig(locale);
  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
          <div className="mb-10 hidden w-5/6 rounded object-cover object-center dark:block md:w-3/6 lg:w-2/6">
            <AnimatedComponent variants={fadeInUp}>
              <Image alt="hero" src={LogoDark} width={720} height={600} />
            </AnimatedComponent>
          </div>

          <div className="mb-10 block w-5/6 rounded object-cover object-center dark:hidden md:w-3/6 lg:w-2/6">
            <AnimatedComponent variants={fadeInUp}>
              <Image alt="hero" src={LogoLight} width={720} height={600} />
            </AnimatedComponent>
          </div>

          <div className="w-full text-center lg:w-2/3">
            <AnimatedComponent variants={fadeInUp}>
              <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 dark:text-white sm:text-4xl">
                {t("title")}
              </h1>
            </AnimatedComponent>

            <AnimatedComponent variants={fadeInUp}>
              <p className="mb-8 leading-relaxed">{t("description")}</p>
            </AnimatedComponent>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <AnimatedComponent
                variants={fadeInLeft}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href={seo.contact.phone.url}
                  className="flex items-center gap-2 rounded-lg bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out"
                >
                  <MdOutlineCall size={22} />
                  {t("contact")}
                </Link>
              </AnimatedComponent>
              <AnimatedComponent
                variants={fadeInRight}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href={seo.contact.gmail.url}
                  className="inline-block rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  {t("email")}
                </Link>
              </AnimatedComponent>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
