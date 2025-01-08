import { Link } from "@/i18n/routing";
import { ArticleItem } from "@/types/article";
import Image from "next/image";

const SingleBlog = ({ artilce }: { artilce: ArticleItem }) => {
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href={"/blog/" + artilce.id}
          className="relative block aspect-[37/22] w-full"
        >
          <Image src={artilce.poster} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={"/blog/" + artilce.id}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {artilce.title}
            </Link>
          </h3>
          <p className="mb-3 border-b border-body-color border-opacity-10 pb-3 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {artilce.desk}
          </p>
          <div className="flex items-center">
            <div className="inline-block">
              <p className="text-xs text-body-color">
                {new Date(artilce.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
