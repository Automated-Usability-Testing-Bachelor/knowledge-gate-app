import moment from "moment";
import uuid from "react-native-uuid";

export type MomentTimeRange = {
  from: moment.Moment;
  to: moment.Moment;
};
export type DateWithAvailability = {
  date: moment.Moment;
  availabilities: Availability[];
};
export type Availability = {
  id: string | number[];
  from: moment.Moment;
  to: moment.Moment;
};
var allCalendarData: DateWithAvailability[] = [
  {
    date: moment(new Date(2022, 8, 4)),
    availabilities: [
      {
        id: uuid.v4(),
        from: moment(new Date(2022, 8, 4, 9, 30, 0, 0)),
        to: moment(new Date(2022, 8, 4, 16, 30, 0, 0)),
      },
    ],
  },
  {
    date: moment(new Date(2022, 9, 4)),
    availabilities: [
      {
        id: uuid.v4(),
        from: moment(new Date(2022, 9, 4, 9, 30, 0, 0)),
        to: moment(new Date(2022, 9, 4, 10, 30, 0, 0)),
      },
    ],
  },
];

export const getCalendarDataFromCurrentMonth = (date: moment.Moment) => {
  let availabilities = [];
  for (let i = 0; i < allCalendarData.length; i++) {
    if (
      allCalendarData[i].date.isSame(date, "year") &&
      allCalendarData[i].date.isSame(date, "month")
    ) {
      availabilities.push({ ...allCalendarData[i] });
    }
  }
  return availabilities;
};

export const getAvailabilitiesFromDay = (day: moment.Moment) => {
  let availabilities: DateWithAvailability | undefined = undefined;
  for (let i = 0; i < allCalendarData.length; i++) {
    if (allCalendarData[i].date.isSame(day, "day")) {
      availabilities = allCalendarData[i];
      return availabilities;
    }
  }
  return undefined;
};

export const getAvailabilityById = (id: string | number[]) => {
  let some: Availability | undefined = undefined;
  allCalendarData.forEach((element) => {
    element.availabilities.forEach((item) => {
      if (item.id.toString() === id.toString()) {
        some = Object.assign({}, item);
        return some;
      }
    });
    return some;
  });

  return some;
};
export const editAvailabilityTimeById = (
  id: string | number[],
  timeRange: MomentTimeRange
) => {
  let some = undefined;
  for (let i = 0; i < allCalendarData.length; i++) {
    for (let j = 0; j < allCalendarData[i].availabilities.length; j++) {
      if (
        allCalendarData[i].availabilities[j].id.toString() === id.toString()
      ) {
        allCalendarData[i].availabilities[j].from = timeRange.from;
        allCalendarData[i].availabilities[j].to = timeRange.to;
        some = Object.assign({}, allCalendarData[i].availabilities[j]);

        return some;
      }
    }
  }
};

export const addAvailability = (
  timeRange: MomentTimeRange,
  date: moment.Moment
) => {
  let startDay = date.startOf("day");
  for (let i = 0; i < allCalendarData.length; i++) {
    if (startDay.isSame(allCalendarData[i].date, "day")) {
      allCalendarData[i].availabilities.push({
        id: uuid.v4(),
        from: timeRange.from,
        to: timeRange.to,
      });
      return;
    }
  }
  appendCalendarData({
    date: date,
    availabilities: [{ id: uuid.v4(), from: timeRange.from, to: timeRange.to }],
  });
};
export const deleteAvailability = (id: string | number[]) => {
  let index = -1;
  for (let i = 0; i < allCalendarData.length; i++) {
    let newAllCalendarAvailabilities = [];
    for (let j = 0; j < allCalendarData[i].availabilities.length; j++) {
      if (id != allCalendarData[i].availabilities[j].id) {
        newAllCalendarAvailabilities.push(allCalendarData[i].availabilities[j]);
      } else {
        index = i;
      }
    }
    allCalendarData[i].availabilities = newAllCalendarAvailabilities;
  }
  if (index != -1) {
    return allCalendarData[index];
  }
};

const appendCalendarData = (element: DateWithAvailability) => {
  allCalendarData.push(element);
};

const displayCalendarData = (methodName: string) => {
  console.log(methodName);
  console.log(JSON.stringify(allCalendarData));
};
