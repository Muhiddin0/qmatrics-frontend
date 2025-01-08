"use client";

import BackButton from "@/components/back";
import { Article } from "@/types/article";
import useReactQueryAction from "hooks/use-react-query-action";
import React from "react";

type Props = {
  params: {
    locale: string;
    id: string;
  };
};

function BlogDetail({ params: { id, locale } }: Props) {
  const { data } = useReactQueryAction<Article>("articles/" + id);

  if (data)
    return (
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {data.title}
                </h2>
                <BackButton />

                <div
                  className="mt-8"
                  dangerouslySetInnerHTML={{ __html: data.content }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default BlogDetail;
