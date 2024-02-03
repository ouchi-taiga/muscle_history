import dayjs from 'dayjs'

/**
 * 現在の月の日付を取得
 * 
 * @param {*} month 
 * @returns 
 */
export function getMonth(month = dayjs().month()) {
  const year = dayjs().year();
  const firstDayOfWeek = dayjs(new Date(year, month, 1)).day();
  let currentDay = 0 - firstDayOfWeek;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentDay++;
      return dayjs(new Date(year, month, currentDay));
    });
  });
  return daysMatrix;
}

export function getDay() {
  const current = dayjs().date();
  return current;
}