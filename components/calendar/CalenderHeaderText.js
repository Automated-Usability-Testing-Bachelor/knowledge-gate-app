import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import moment from "moment";
import {BlackSansHeader2, BlueSerifHeader2} from "../Texts/Headers";

const CalendarHeaderText = ({date}) => {
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
        } else if (
            date
                .clone()
                .startOf("day")
                .add(2, "day")
                .isAfter(moment().startOf("day").add(2, "day"))
        ) {
            return "Later";
        } else if (
            date
                .clone()
                .startOf("day")
                .subtract(2, "day")
                .isBefore(moment().startOf("day").add(2, "day"))
        ) {
            return "In the past";
        }
        return "";
    };
    return (
        <View style={styles.container}>
            <BlueSerifHeader2 text={setRelativeDay(date)}/>
            <BlackSansHeader2 text={date.format("dddd, MMMM Do")}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical: 20,
    },
});

export default CalendarHeaderText;
