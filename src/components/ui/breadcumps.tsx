import { ArticleResponse } from "@/types/article";
import React from "react";

interface PaginationProps {
  data: ArticleResponse;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  data,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(data.count / data.page_size);

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, currentPage + 2);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (startPage > 1) pages.unshift(1);
      if (startPage > 2) pages.unshift("...");

      if (endPage < totalPages - 1) pages.push("...");
      if (endPage < totalPages) pages.push(totalPages);
    }

    return pages;
  };

  if (data.count === 0) return null;
  return (
    <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
      <div className="w-full px-4">
        <ul className="flex items-center justify-center pt-8">
          <li className="mx-1">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={!data.links.previous}
              className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
            >
              Prev
            </button>
          </li>

          {generatePageNumbers().map((page, index) => (
            <li key={index} className="mx-1">
              {page === "..." ? (
                <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                  ...
                </span>
              ) : (
                <button
                  onClick={() => onPageChange(Number(page))}
                  className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${page === currentPage ? "bg-primary text-white" : "bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white"}`}
                >
                  {page}
                </button>
              )}
            </li>
          ))}

          <li className="mx-1">
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={!data.links.next}
              className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
