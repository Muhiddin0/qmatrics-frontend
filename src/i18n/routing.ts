import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "uz", "ru"], // Qo'llaniladigan tillar
  defaultLocale: "en", // Default til
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
