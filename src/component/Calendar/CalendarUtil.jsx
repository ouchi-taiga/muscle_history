import dayjs from 'dayjs'

/**
 * 現在の月のカレンダーを取得
 * 
 * @param {*} month 
 * @returns 
 */
export function getMonth(month) {
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

/** 現在の年を取得 */
export function getCurrentYear() {
  return dayjs().year();
}

/** 現在の月を取得 */
export function getCurrentMonth() {
  return dayjs().month() + 1;
}

/** 現在の日を取得 */
export function getCurrentDay() {
  return dayjs().date();
}