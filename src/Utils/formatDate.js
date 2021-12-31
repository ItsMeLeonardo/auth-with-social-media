export const formatDate = (date = new Date()) => {
  if (!date) return "unknown date";
  const differenceMilliseconds = new Date() - date;
  const differenceSeconds = Math.round(differenceMilliseconds / 1000);
  const differenceMinutes = differenceSeconds / 60;
  const differenceHours = differenceMinutes / 60;

  if (differenceSeconds < 1) {
    return "Right now";
  }
  if (differenceMinutes < 1) {
    return `${differenceSeconds} sec ago `;
  }
  if (differenceHours < 1) {
    return `${differenceMinutes} min ago`;
  }
  return date.toDateString();
};
