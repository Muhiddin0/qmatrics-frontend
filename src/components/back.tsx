"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";

type Props = {};

function BackButton({}: Props) {
  const route = useRouter();

  const t = useTranslations("common");

  return (
    <>
      <button
        onClick={() => route.back()}
        type="button"
        className="mt-4 flex items-center"
      >
        <MdKeyboardBackspace size={22} />
        <span className="ml-2">{t("back")}</span>
      </button>
    </>
  );
}

export default BackButton;
