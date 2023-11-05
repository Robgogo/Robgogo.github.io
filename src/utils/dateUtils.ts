export const readableDateString = (date: Date) => {
  const [_day, month, _date, year] = date.toDateString().split(" ");
  return `${month}, ${year}`;
};
