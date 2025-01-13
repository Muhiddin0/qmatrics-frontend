"use client";

import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Pagination from "@/components/ui/breadcumps";
import { ArticleResponse } from "@/types/article";
import useReactQueryAction from "hooks/use-react-query-action";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { BeatLoader } from "react-spinners";

const Blog = () => {
  const t = useTranslations("Blog");
  const [currentContent, setCurrentContent] = useState(1);
  const { data } = useReactQueryAction<ArticleResponse>(
    "articles/?page=" + currentContent,
  );

  return (
    <>
      <Breadcrumb pageName={t("blog")} description={t("description")} />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {data ? (
              <>
                {data.results.length > 0 ? (
                  data.results.map((artilce) => (
                    <div
                      key={artilce.id}
                      className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                    >
                      <SingleBlog artilce={artilce} />
                    </div>
                  ))
                ) : (
                  <>
                    <h1>{t("noData")}</h1>
                  </>
                )}

                <Pagination
                  currentPage={currentContent}
                  data={data}
                  onPageChange={(page) => {
                    setCurrentContent(page);
                  }}
                />
              </>
            ) : (
              <>
                <BeatLoader size={20} color="#fff" />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
