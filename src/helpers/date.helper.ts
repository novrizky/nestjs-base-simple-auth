import * as moment from 'moment-timezone';

export const currentDate = (isodate: string = null) => {
  let newDate = moment();
  if (isodate) newDate = moment(isodate);
  return newDate.tz('Asia/Jakarta').format();
};