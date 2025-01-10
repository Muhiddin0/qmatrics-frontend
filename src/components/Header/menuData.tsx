import { Menu } from "@/types/menu";

const menuData: Menu = {
  en: [
    {
      id: 1,
      title: "Home",
      path: "/",
      newTab: false,
    },
    {
      id: 2,
      title: "About",
      path: "/about",
      newTab: false,
    },
    {
      id: 3,
      title: "Blog",
      path: "/blog",
      newTab: false,
    },
    {
      id: 4,
      title: "Services",
      newTab: false,
      submenu: [
        {
          id: 48,
          title: "Error Page",
          path: "/error",
          newTab: false,
        },
      ],
    },
  ],
  uz: [
    {
      id: 1,
      title: "Bosh sahifa",
      path: "/",
      newTab: false,
    },
    {
      id: 2,
      title: "Biz haqimizda",
      path: "/about",
      newTab: false,
    },
    {
      id: 3,
      title: "Blog",
      path: "/blog",
      newTab: false,
    },
    {
      id: 4,
      title: "Xizmatlar",
      newTab: false,
      submenu: [
        {
          id: 48,
          title: "Xato sahifa",
          path: "/error",
          newTab: false,
        },
      ],
    },
  ],
  ru: [
    {
      id: 1,
      title: "Главная",
      path: "/",
      newTab: false,
    },
    {
      id: 2,
      title: "О нас",
      path: "/about",
      newTab: false,
    },
    {
      id: 3,
      title: "Блог",
      path: "/blog",
      newTab: false,
    },
    {
      id: 4,
      title: "Услуги",
      newTab: false,
      submenu: [
        {
          id: 48,
          title: "Страница ошибки",
          path: "/error",
          newTab: false,
        },
      ],
    },
  ],
};

export default menuData;
