import moment from 'moment';

export const timeSince = (days: number) => {
  let calcDate = new Date(Date.now() - days * 24 * 3600 * 1000);
  let seconds = Math.floor((new Date().getTime() - calcDate.getTime()) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + 'y ago';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + 'm ago';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + 'd ago';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + 'h ago';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + 'm ago';
  }
  return Math.floor(seconds) + 's ago';
};

export const getCustomDateTime = (
  value: number = 0,
  unit: moment.unitOfTime.DurationConstructor = 'days',
  format: string = 'MM-DD-YYYY HH:mm:ss'
) => {
  if (value === 0) {
    return moment().format(format);
  } else {
    return moment().add(value, unit).format(format);
  }
};

export const getDateElements = (date: string) => {
  const dateString = moment(date).format('MM-DD-YYYY HH:mm:ss');
  const dateSections = dateString.split(',');
  const day = dateSections[0];
  const time = dateSections[2];
  const datePart = dateSections[1].trim().split(' ');
  return {
    day,
    time,
    date: {
      dateString: dateSections[1],
      month: datePart[0],
      date: datePart[1],
      year: datePart[2],
    },
  };
};
