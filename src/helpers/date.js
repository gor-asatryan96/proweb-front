import dayjs from 'dayjs';

export function formateDate(date) {
  const day = dayjs(date).format('DD.MM.YYYY');
  const time = dayjs(date).format('HH:mm');

  return { day, time };
}
