import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../../../constants/Colors";
import { BlueSerifHeader2 } from "../../Texts/Headers";
import Modal from "react-native-modal";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const TimeSelectionView = ({ returnTimeRangeCallback }) => {
  const minuteInterval = 30;
  const [fromDate, setFromDate] = useState(roundMinutes(new Date()));
  const [toDate, setToDate] = useState(addHours(roundMinutes(new Date()), 1));
  const initialTimeRange = {
    from: fromDate,
    to: toDate,
  };

  const [fromString, setFromString] = useState(
    moment(fromDate).format("hh:mm A")
  );
  const [toString, setToString] = useState(moment(toDate).format("hh:mm A"));

  const [toShow, setToShow] = useState(false);
  const [fromShow, setFromShow] = useState(false);

  const openFromPicker = () => {
    setFromShow(true);
  };

  const openToPicker = () => {
    setToShow(true);
  };
  const onFromChange = (selectedDate) => {
    const currentDate = selectedDate.nativeEvent.timestamp;
    setFromShow(false);
    let newDate = new Date(currentDate);
    setFromDate(newDate);
    let newTimeRange = { from: moment(newDate), to: moment(toDate) };
    returnTimeRangeCallback(newTimeRange);
    setFromString(moment(currentDate).format("hh:mm A"));
  };
  const onToChange = (selectedDate) => {
    const currentDate = selectedDate.nativeEvent.timestamp;
    setToShow(false);
    let newDate = new Date(currentDate);
    setToDate(new Date(currentDate));
    let newTimeRange = { from: moment(fromDate), to: moment(newDate) };
    returnTimeRangeCallback(newTimeRange);
    setToString(moment(currentDate).format("hh:mm A"));
  };
  useEffect(() => {
    let date = new Date(fromDate);
    date.setMinutes(date.getMinutes() + 30);
    if (
      moment(toDate).isBetween(moment(fromDate), moment(date)) ||
      moment(toDate).isSame(moment(fromDate)) ||
      moment(toDate).isBefore(moment(fromDate))
    ) {
      setToDate(date);
      setToString(moment(date).format("hh:mm A"));
      let newTimeRange = { from: moment(fromDate), to: moment(date) };
      returnTimeRangeCallback(newTimeRange);
    } else {
      let newTimeRange = { from: moment(fromDate), to: moment(toDate) };
      returnTimeRangeCallback(newTimeRange);
    }
  }, [fromDate]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openFromPicker}>
        <View style={styles.fromContainer}>
          <Text>From</Text>
          <View style={styles.timeContainer}>
            <Text>{fromString}</Text>
          </View>
        </View>
      </TouchableOpacity>

      {fromShow && (
        <DateTimePicker
          testID="fromPicker"
          value={fromDate}
          minimumDate={new Date()}
          mode="time"
          is24Hour={false}
          onChange={onFromChange}
          minuteInterval={minuteInterval}
        />
      )}

      <TouchableOpacity onPress={openToPicker}>
        <View style={styles.toContainer}>
          <Text>To</Text>
          <View style={styles.timeContainer}>
            <Text>{toString}</Text>
          </View>
        </View>
      </TouchableOpacity>

      {toShow && (
        <DateTimePicker
          testID="toPicker"
          value={toDate}
          minimumDate={fromDate}
          mode="time"
          is24Hour={false}
          onChange={onToChange}
          minuteInterval={minuteInterval}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  toContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  fromContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingRight: 20,
    paddingVertical: 10,
  },
  timeContainer: {
    marginLeft: 10,
    paddingHorizontal: 15,
    paddingVertical: 11,
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
});
function roundMinutes(date) {
  date.setHours(date.getHours() + Math.round(date.getMinutes() / 60));
  date.setMinutes(0, 0, 0); // Resets also seconds and milliseconds

  return date;
}
function addHours(date, hours) {
  date.setHours(date.getHours() + hours);

  return date;
}
export default TimeSelectionView;
