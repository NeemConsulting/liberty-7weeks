const convert = (minutes = 0): string => {
  const days = Math.floor(minutes / 1440);
  minutes = minutes - days * 1440;
  const hours = Math.floor(minutes / 60);
  minutes = minutes - hours * 60;

  let dur = 'PT';
  if (days > 0) {
    dur += days + 'D';
  }
  if (hours > 0) {
    dur += hours + 'H';
  }
  dur += minutes + 'M';

  return dur;
};

export default convert;
