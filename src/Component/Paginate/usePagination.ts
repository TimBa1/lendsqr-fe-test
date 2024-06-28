import { useMemo } from "react";

export const DOTS = "...";

const usePagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
}: {
  totalItems: any;
  itemsPerPage: any;
  currentPage: any;
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalItems / itemsPerPage);

    const totalNumbers = 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPageCount > totalBlocks) {
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPageCount - 1, currentPage + 1);
      const pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPageCount - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          return [1, DOTS, ...extraPages, ...pages, totalPageCount];
        }
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          return [1, ...pages, ...extraPages, DOTS, totalPageCount];
        }
        case hasLeftSpill && hasRightSpill:
        default: {
          return [1, DOTS, ...pages, DOTS, totalPageCount];
        }
      }
    }

    return range(1, totalPageCount);
  }, [totalItems, itemsPerPage, currentPage]);

  return paginationRange;
};

const range = (start: any, end: any) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export default usePagination;
