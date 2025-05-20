import { useMemo } from "react";

export const useReadingStats = (book) => {
  const bookProgress = book?.progress || [];
  const totalPages = book?.totalPages || 1;

  const lastEntry = useMemo(() => {
    return bookProgress.length > 0
      ? bookProgress[bookProgress.length - 1]
      : null;
  }, [bookProgress]);

  const totalPagesRead = useMemo(() => {
    if (!lastEntry) return 0;
    return Math.max(0, lastEntry.finishPage - lastEntry.startPage);
  }, [lastEntry]);

  const percentage = useMemo(() => {
    if (bookProgress.length === 0) return 0;
    const last = bookProgress[bookProgress.length - 1];
    const lastPages = Math.max(0, last.finishPage - last.startPage);
    const lastSafe = Math.min(lastPages, totalPages);
    return parseFloat(((lastSafe / totalPages) * 100).toFixed(1));
  }, [bookProgress, totalPages]);

  const readSpeed = useMemo(() => {
    return bookProgress.length > 0
      ? bookProgress[bookProgress.length - 1].speed
      : 0;
  }, [bookProgress]);

  return { totalPagesRead, percentage, readSpeed };
};
