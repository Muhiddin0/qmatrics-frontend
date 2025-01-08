import { Link } from "@/i18n/routing";
import React from "react";

import LogoDark from "@/assets/logo-dark.png";
import LogoLight from "@/assets/logo-light.png";
import Image from "next/image";

type Props = {};

function Logo({}: Props) {
  return (
    <Link href={"/"}>
      <Image
        className="hidden h-[50px] w-auto py-1 dark:block"
        src={LogoDark}
        alt="logo"
        width={200}
        height={200}
      />
      <Image
        className="block h-[50px] w-auto py-1 dark:hidden"
        src={LogoLight}
        alt="logo"
        width={200}
        height={200}
      />
    </Link>
  );
}

export default Logo;
