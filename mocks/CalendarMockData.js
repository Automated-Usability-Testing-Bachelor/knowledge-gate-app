import moment from "moment";
import uuid from "react-native-uuid";

var allCalendarData = [
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

export const getCalendarDataFromCurrentMonth = (date) => {
  displayCalendarData("getCalendarDataFromCurrentMonth");

  let availabilities = [];
  for (let i = 0; i < allCalendarData.length; i++) {
    if (
      allCalendarData[i].date.isSame(date, "year") &&
      allCalendarData[i].date.isSame(date, "month")
    ) {
      console.log("each date inside getCalendarDataFromCurrentMonth");
      console.log(allCalendarData[i]);
      availabilities.push({ ...allCalendarData[i] });
    }
  }
  return availabilities;
};

export const getAvailabilitiesFromDay = (day) => {
  displayCalendarData("getAvailabilitiesFromDay");

  let availabilities = undefined;
  for (let i = 0; i < allCalendarData.length; i++) {
    if (allCalendarData[i].date.isSame(day, "day")) {
      availabilities = allCalendarData[i];
      return availabilities;
    }
  }
  return undefined;
};

export const getAvailabilityById = (id) => {
  displayCalendarData("getAvailabilityById");
  let some = undefined;
  allCalendarData.forEach((element) => {
    element.availabilities.forEach((item) => {
      console.log(item);
      if (item.id.toString() === id.toString()) {
        some = Object.assign({}, item);
        return some;
      }
    });
    return some;
  });
  console.log(some.to.format("hh:mm A"));
  return some;
};

export const addAvailability = (timeRange, date) => {
  displayCalendarData("addAvailability");
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
export const deleteAvailability = (id) => {
  displayCalendarData("deleteAvailability");
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

const appendCalendarData = (element) => {
  allCalendarData.push(element);
};

const displayCalendarData = (methodName) => {
  console.log(methodName);
  console.log(JSON.stringify(allCalendarData));
};
