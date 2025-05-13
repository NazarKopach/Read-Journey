import { useMemo } from "react";

export const useReadingStats = (book) => {
  const bookProgress = book?.progress || [];
  const totalPages = book?.totalPages || 1;

  const totalPagesRead = useMemo(() => {
    return bookProgress.reduce((acc, item) => {
      const pages = Math.max(0, item.finishPage - item.startPage);
      return acc + pages;
    }, 0);
  }, [bookProgress]);

  const safePagesRead = useMemo(() => {
    return Math.min(totalPagesRead, totalPages);
  }, [totalPagesRead, totalPages]);

  const percentage = useMemo(() => {
    return parseFloat(((safePagesRead / totalPages) * 100).toFixed(1));
  }, [safePagesRead, totalPages]);

  const readSpeed = useMemo(() => {
    return bookProgress.length > 0
      ? bookProgress[bookProgress.length - 1].speed
      : 0;
  }, [bookProgress]);

  return { totalPagesRead, safePagesRead, percentage, readSpeed };
};
