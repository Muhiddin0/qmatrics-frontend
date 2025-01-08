"use client";

import useReactQueryAction from "hooks/use-react-query-action";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import { ArticleResponse } from "@/types/article";

const Blog = () => {
  const { data } = useReactQueryAction<ArticleResponse>("articles/");

  if (data)
    return (
      <section
        id="blog"
        className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="So'ngi yangiliklarimiz"
            paragraph="Qmatix companyasi so'ngi yangiliklarini siz bilan baham ko'rishni istaydi."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {data.results.map((article) => (
              <div key={article.id} className="w-full">
                <SingleBlog artilce={article} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Blog;
