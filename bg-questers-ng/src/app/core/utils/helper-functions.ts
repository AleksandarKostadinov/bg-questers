const getHoursInMiliseconds = (hours: number) => {
  return hours * 60 * 60 * 1000;
};

const getDate = (timestamp: number): string => {
  return (new Date(timestamp)).toISOString().slice(0, 10);
};

export { getHoursInMiliseconds, getDate };
