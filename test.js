const groupWeeks = [
  { date: '2020-01-01', count: 2 },
  { date: '2020-01-05', count: 3 },
  { date: '2020-01-06', count: 3 },
  { date: '2020-01-09', count: 3 },
  { date: '2020-01-13', count: 4 },
  { date: '2020-01-19', count: 5 },
  { date: '2020-02-01', count: 26 },
  { date: '2020-02-02', count: 2 },
  { date: '2020-02-03', count: 3 }
];

const sums = groupWeeks
  .reduce((weeks, item, i) => {
    const prevWeek = [...weeks].pop();

    if (!prevWeek) {
      weeks.push({ startDate: item.date, count: [item.count] });
    } else {
      const day = new Date(item.date).getDay() || 7;
      const date = new Date(item.date).getDate();
      const month = new Date(item.date).getMonth();

      const prevDay = new Date(prevWeek.startDate).getDay() || 7;
      const prevDate = new Date(prevWeek.startDate).getDate();
      const prevMonth = new Date(prevWeek.startDate).getMonth();

      if (
        day - prevDay < 7 &&
        date - prevDate < 7 &&
        date - prevDate >= 0 &&
        day - prevDay >= 0 &&
        month === prevMonth
      ) {
        prevWeek.count.push(item.count);
        weeks.splice(weeks.length - 1, 1, prevWeek);
      } else {
        weeks.push({
          startDate: item.date,
          count: [item.count]
        });
      }
    }

    return weeks;
  }, [])
  .map(week => ({
    ...week,
    count: week.count.reduce((sum, week) => sum + week, 0) / week.count.length
  }));

console.log(sums);
