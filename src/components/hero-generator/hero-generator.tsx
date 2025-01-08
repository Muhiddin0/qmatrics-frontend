import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  poster: string;
}

function HeroGenerator({ title, description, poster }: Props) {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex min-h-[90vh] flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 dark:text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mb-8 leading-relaxed">{description}</p>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <Image
            className="rounded object-cover object-center"
            alt="hero"
            src={poster}
            width={720}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroGenerator;
