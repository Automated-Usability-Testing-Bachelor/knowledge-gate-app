import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import TimePicker from "./TimePicker";

const TimeSelectionView = ({ returnTimeRangeCallback, startFrom, startTo }) => {
  const minuteInterval = 30;
  const [fromDate, setFromDate] = useState(startFrom);
  const [toDate, setToDate] = useState(startTo);
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
    console.log("open");
  };

  const openToPicker = () => {
    setToShow(true);
  };
  const onFromChange = (event, date) => {
    if (date === undefined) {
      setFromShow(false);
      return;
    } else {
      setFromShow(false);
    }
    console.log(date);
    const currentDate = date;

    let newDate = new Date(currentDate);
    setFromDate(newDate);
    let newTimeRange = { from: moment(newDate), to: moment(toDate) };
    returnTimeRangeCallback(newTimeRange);
    setFromString(moment(currentDate).format("hh:mm A"));
  };
  const onToChange = (event, date) => {
    if (date === undefined) {
      setToShow(false);
      return;
    } else {
      setToShow(false);
    }
    const currentDate = date;

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
      <TimePicker
        show={fromShow}
        date={fromDate}
        onChangecallback={onFromChange}
        minuteInterval={minuteInterval}
      />

      <TouchableOpacity onPress={openToPicker}>
        <View style={styles.toContainer}>
          <Text>To</Text>
          <View style={styles.timeContainer}>
            <Text>{toString}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View>
        <TimePicker
          show={toShow}
          date={toDate}
          onChangecallback={onToChange}
          minuteInterval={minuteInterval}
        />
      </View>
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
export default TimeSelectionView;
