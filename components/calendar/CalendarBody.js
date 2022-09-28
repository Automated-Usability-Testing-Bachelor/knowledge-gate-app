import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import Colors from "../../constants/Colors";
import ActualCalendar from "./actualCalendar";
import AvailabilityHeader from "./AvailabilityHeader";
import ScheduleBtn from "./ScheduleBtn";
import {
  getCalendarDataFromCurrentMonth,
  addAvailability,
  getAvailabilityById,
} from "../../mocks/CalendarMockData";
import moment from "moment";
import ScheduleAvailabilityModal from "./scheduleModal/ScheduleAvailabilityModal";
import AvailabilitiesView from "./AvailabilitiesView";

const CalendarBody = ({ selectedDayHeaderCallback }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalStartTimeRange, setModalStartTimeRange] = useState({
    from: roundMinutes(new Date()),
    to: addHours(roundMinutes(new Date()), 1),
  });
  const [currentMonth, setCurrentMonth] = useState(moment().startOf("month"));
  const initialDatesWithAv = getCalendarDataFromCurrentMonth(moment());
  const [datesWithAvailabilities, setDatesWithAvailability] =
    useState(initialDatesWithAv);
  const [currentDate, setCurrentDate] = useState(moment());
  const ShowModalCallback = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const currentMonthCallback = (date) => {
    setDatesWithAvailability(getCalendarDataFromCurrentMonth(date));
    setCurrentMonth(date);
  };
  const selectedDayCallback = (date) => {
    selectedDayHeaderCallback(date);
    setCurrentDate(date);
  };
  const onEditAvailability = (id) => {
    let av = getAvailabilityById(id);
    console.log("from date--------------------");
    console.log(av.from.format("hh:mm A"));
    console.log(av.to.format("hh:mm A"));
    setModalStartTimeRange({
      from: av.from.toDate(),
      to: av.to.toDate(),
    });
    console.log(av);
  };

  const getscheduledTime = (timeRange) => {
    addAvailability(timeRange, currentDate);

    //for refreshing availabilities view
    setCurrentDate(currentDate.clone());

    //refreshing calendar styling
    let month = currentDate.clone();
    month = month.startOf("month");
    let arr = [];
    let newData = getCalendarDataFromCurrentMonth(month);

    for (let i = 0; i < newData.length; i++) {
      arr.push(Object.assign({}, newData[i]));
    }
    setDatesWithAvailability(arr);
  };

  return (
    <ScrollView style={styles.container}>
      <ActualCalendar
        datesWithAvailabilities={datesWithAvailabilities}
        selectedDayCallback={selectedDayCallback}
        currentMonthCallback={currentMonthCallback}
      />
      <AvailabilityHeader />
      <AvailabilitiesView
        currentDate={currentDate}
        onEditCallback={onEditAvailability}
      />
      <ScheduleBtn ShowModalCallback={ShowModalCallback} />
      <ScheduleAvailabilityModal
        closeModal={closeModal}
        showModal={showModal}
        getTimeRangeCallback={getscheduledTime}
        modalStartTimeRange={modalStartTimeRange}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: Colors.offWhite.color,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 0,
  },
  NoAvailabilityContainer: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
});

export default CalendarBody;
function roundMinutes(date) {
  date.setHours(date.getHours() + Math.round(date.getMinutes() / 60));
  date.setMinutes(0, 0, 0); // Resets also seconds and milliseconds

  return date;
}
function addHours(date, hours) {
  date.setHours(date.getHours() + hours);

  return date;
}
