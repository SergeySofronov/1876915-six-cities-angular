import { MONTH_NAMES } from '@app/const';

export const getCommentDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.getMonth();
  const humanMonth = MONTH_NAMES[month];
  const dayNumber = date.getDay();
  const day = dayNumber < 10 ? `0${dayNumber}` : `${dayNumber}`;

  return [`${humanMonth} ${date.getFullYear()}`, `${day}-${month}-${date.getFullYear()}`];
};
