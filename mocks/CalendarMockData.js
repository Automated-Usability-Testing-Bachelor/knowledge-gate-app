import moment from "moment";

export const getCalendarDataFromCurrentMonth = (date) => {
  let now = moment();
  let availabilities = [];
  for (let i = 0; i < allCalendarData.length; i++) {
    if (
      allCalendarData[i].date.isSame(date, "year") &&
      allCalendarData[i].date.isSame(date, "month")
    ) {
      console.log("yeds");
      availabilities.push({ ...allCalendarData[i] });
    }
  }
  return availabilities;
};

const allCalendarData = [
  {
    date: moment(new Date(2022, 8, 4)),
    availabilities: [
      {
        from: moment(new Date(2022, 8, 4, 9, 30, 0, 0)),
        to: moment(new Date(2022, 8, 4, 16, 30, 0, 0)),
      },
    ],
  },
  {
    date: moment(new Date(2022, 9, 4)),
    availabilities: [
      {
        from: moment(new Date(2022, 9, 4, 9, 30, 0, 0)),
        to: moment(new Date(2022, 9, 4, 10, 30, 0, 0)),
      },
    ],
  },
];
