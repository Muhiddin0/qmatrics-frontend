import { Link } from "@/i18n/routing";
import { SectionItem } from "@/types/section.types";
import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";

const SingleFeature = ({ feature: Feature }: { feature: SectionItem }) => {
  const { title, short_description, id, icon } = Feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 p-2 text-primary">
          <Image width={400} height={400} src={icon} alt="Image" />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {short_description}
        </p>
        <Link
          className="inline-flex items-center justify-center gap-3 transition-all duration-300 hover:text-primary"
          href={`/feature/${id}`}
        >
          Batafsil
          <TbExternalLink />
        </Link>
      </div>
    </div>
  );
};

export default SingleFeature;
