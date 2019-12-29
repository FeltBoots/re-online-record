const locales = 'ru';

const dateOptions = {
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
};

const formatDayName = (d) => {
  const date = new Date(d).toLocaleString(locales, dateOptions);
  return `${date.charAt(0).toUpperCase()}${date.slice(1)}`;
};

const formatDayTime = (times) => times.map(({ begin, end}) => `${begin}-${end}`);

const getFreeTime = (data) => {
  const freeDayTime = {};
  Object.keys(data).forEach(day => {
    Object.keys(data[day]).forEach(record => {
      const { is_not_free, begin, end } = data[day][record];
      if (is_not_free) {
        return;
      }
      if (!freeDayTime[day]) {
        freeDayTime[day] = [];
      }
      freeDayTime[day].push({ begin, end });
    });
  });
  const sortedDayNames = Object.keys(freeDayTime).sort((a, b) => new Date(a) - new Date(b));
  const days = [];
  const time = [];
  sortedDayNames.forEach((day, idx) => {
    days[idx] = { id: idx, day : formatDayName(day) };
    const formattedTime = formatDayTime(freeDayTime[day]);
    time[idx] = [];
    formattedTime.forEach((t, i) => {
      time[idx].push({ id: i, time: t });
    });
  });
  return { days, time };
};

const formatTimetable = ({ data }) => getFreeTime(data);

export default formatTimetable;
