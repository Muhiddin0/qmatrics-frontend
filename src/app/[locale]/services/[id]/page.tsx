"use client";

import BackButton from "@/components/back";
import { useRouter } from "@/i18n/routing";
import { Service } from "@/types/services";
import useReactQueryAction from "hooks/use-react-query-action";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";

type Props = {
  params: {
    id: string;
  };
};

function Page({ params: { id } }: Props) {
  const { data } = useReactQueryAction<Service>(
    "services/sections/services/" + id,
  );

  if (data)
    return (
      <section>
        <br />
        <br />
        <br />
        <div className="container mb-12 pt-12">
          <h1 className="text-2xl font-semibold">{data.title}</h1>
          <BackButton />

          <div
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      </section>
    );
}

export default Page;
