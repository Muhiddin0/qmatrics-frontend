import { Link, usePathname } from "@/i18n/routing";
import { useParams } from "next/navigation";
import React, { useState } from "react";

import Flag from "react-world-flags";

const LanguageSwitcher = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const languages = [
    { label: "English", lang: "en", flag: "gb" },
    { label: "Uzbek", lang: "uz", flag: "uz" },
    { label: "Russian", lang: "ru", flag: "ru" },
  ];

  const pathname = usePathname();
  const { locale }: { locale: string } = useParams();
  const flag = languages.filter((item) => item.lang === locale)[0].flag;

  return (
    <div className="relative">
      <button
        type="button"
        title="select language"
        onClick={() => setMenuToggle(!menuToggle)}
      >
        <Flag code={flag} className="w-10 rounded-md" />
      </button>
      {menuToggle && (
        <div className="absolute right-0 top-0 z-30 mt-12 w-48 min-w-full rounded bg-white text-sm text-gray-700 shadow-md dark:bg-gray-800 dark:text-gray-200">
          <div className="relative z-10 w-full overflow-auto rounded bg-white dark:bg-gray-800">
            <ul className="list-reset">
              {languages.map((item, index) => (
                <li key={index}>
                  <Link
                    href={pathname}
                    locale={item.lang}
                    className="flex px-4 py-2 no-underline transition-colors duration-100 hover:bg-gray-100 hover:no-underline dark:hover:bg-gray-700"
                  >
                    <Flag code={item.flag} className="w-10 rounded-md" />
                    <span className="ml-2">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
