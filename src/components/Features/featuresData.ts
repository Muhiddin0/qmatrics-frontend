// @ts-nocheck

import { FaInstagram } from "react-icons/fa6";
import { SiInstatus } from "react-icons/si";
import { FaCode } from "react-icons/fa6";
import { MdDisplaySettings } from "react-icons/md";
import { TbSettingsBolt } from "react-icons/tb";
import { VscSymbolColor } from "react-icons/vsc";

import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    title: "CMM",
    icon: FaInstagram,
    paragraph:
      "CMM (Customer Management Module) mijozlar bilan samarali aloqa o'rnatish va ularning ehtiyojlarini boshqarish uchun mo'ljallangan tizimdir.",
  },
  {
    id: 2,
    title: "Marketing",
    icon: SiInstatus,
    paragraph:
      "Marketing xizmati orqali siz mahsulot va xizmatlaringizni targ'ib qilish, mijozlarni jalb qilish va savdo hajmini oshirishga yordam berasiz.",
  },
  {
    id: 3,
    title: "Dasturiy ta'minot",
    icon: FaCode,
    paragraph:
      "Dasturiy ta'minot ishlab chiqish xizmati yordamida korxonangiz uchun maxsus yechimlarni yaratib, jarayonlarni avtomatlashtirishga erishasiz.",
  },
  {
    id: 4,
    title: "Tizimlashtirish",
    icon: MdDisplaySettings,
    paragraph:
      "Tizimlashtirish bu jarayonlarni optimallashtirish va samaradorlikni oshirish uchun ichki ishlarni yaxshi tashkil qilishni anglatadi.",
  },
  {
    id: 5,
    icon: TbSettingsBolt,
    title: "Avtomatlashtirish",
    paragraph:
      "Avtomatlashtirish yordamida odatiy vazifalarni avtomatik ravishda bajarib, vaqt va resurslarni tejash imkoniyatini qo'lga kiritasiz.",
  },
  {
    id: 6,
    icon: VscSymbolColor,
    title: "Web/Grafic Design",
    paragraph:
      "Web va grafika dizayni sohasida biznesingizning vizual ko'rinishini mukammallashtirish uchun ijodiy echimlar taqdim etiladi.",
  },
];

export default featuresData;
