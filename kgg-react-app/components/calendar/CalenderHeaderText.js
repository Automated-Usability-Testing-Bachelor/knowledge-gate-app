import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import moment from "moment";

const CalendarHeaderText = ({ date }) => {
  const relativeDay = "Today";
  const weekday = date.day();
  const seperation = ", ";
  const [currentDate, setCurrentDate] = useState(date.date());
  const month = "Jan";
  const setRelativeDay = (date) => {
    if (
      moment().format("dddd, MMMM D YYYY") === date.format("dddd, MMMM D YYYY")
    ) {
      return "Today";
    } else if (
      date.isBetween(
        moment().startOf("day").subtract(1, "day"),
        moment().startOf("day")
      )
    ) {
      return "Yesterday";
    } else if (
      date.isBetween(
        moment().startOf("day").add(1, "day"),
        moment().startOf("day").add(2, "day")
      )
    ) {
      return "Tomorrow";
    }
    return "";
  };
  return (
    <View style={styles.container}>
      <Text style={styles.topHeader}>{setRelativeDay(date)}</Text>
      <Text style={styles.botHeader}>{date.format("dddd, MMMM Do")}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  topHeader: {
    fontSize: 18,
    color: Colors.blue.color,
  },
  botHeader: {
    fontSize: 20,
    color: Colors.black.color,
  },
});

export default CalendarHeaderText;
