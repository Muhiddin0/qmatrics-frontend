"use client";

import HeroGenerator from "@/components/hero-generator/hero-generator";
import { Link } from "@/i18n/routing";
import { SectionDetail } from "@/types/section.types";
import useReactQueryAction from "hooks/use-react-query-action";
import React from "react";

type Props = {
  params: {
    feature: string;
  };
};

function Page({ params: { feature } }: Props) {
  const { data } = useReactQueryAction<SectionDetail>(
    "services/sections/" + feature,
  );

  if (data)
    return (
      <>
        <HeroGenerator
          description={data.description}
          poster={data.poster}
          title={data.title}
        />

        <section className="body-font text-gray-600">
          <div className="container mx-auto px-5 py-24">
            <div className="-m-4 flex flex-wrap">
              {data.services.map((item) => (
                <div className="p-4 md:w-1/3" key={item.id}>
                  <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
                    <img
                      className="w-full object-cover object-center md:h-36 lg:h-48"
                      src="https://dummyimage.com/720x400"
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                        {item.title}
                      </h2>
                      <p className="col-span-5 mb-3 leading-relaxed">
                        {item.short_description}
                      </p>
                      <div className="flex flex-wrap items-center ">
                        <Link
                          href={"/services/" + item.id}
                          className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="ml-2 h-4 w-4"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
}

export default Page;
