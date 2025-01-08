import { FaCode } from "react-icons/fa6";
import { MdDisplaySettings } from "react-icons/md";
import { TbHeartHandshake, TbSettingsBolt } from "react-icons/tb";

import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 3,
    title: "IT mahsulotlarni yaratish ",
    icon: FaCode,
    paragraph: "Bizning xizmatlarimiz IT mahsulotlarni yaratishga qaratilgan.",
  },
  {
    id: 4,
    title: "Biznes jarayonlarni optimallashtirish",
    icon: MdDisplaySettings,
    paragraph:
      "Biznes jarayonlarini optimallashtirish orqali samaradorlikni oshiramiz.",
  },
  {
    id: 5,
    icon: TbSettingsBolt,
    title: "Biznes jarayonlarni avtomatlashtirishi ",
    paragraph:
      "Biznes jarayonlarini avtomatlashtirish xizmatlarini taqdim etamiz.",
  },
  {
    id: 5,
    icon: TbHeartHandshake,
    title: "SMT",
    paragraph: "SMT xizmatlari orqali biznesingizni rivojlantiring.",
  },
];

export default featuresData;
