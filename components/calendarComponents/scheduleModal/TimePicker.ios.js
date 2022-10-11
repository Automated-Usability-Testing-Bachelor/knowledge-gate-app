import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import {StyleSheet} from "react-native";
import Colors from "../../../constants/Colors";

const TimePicker = ({date, onChangecallback}) => {
    return (
        <DateTimePicker
            style={styles.picker}
            value={date}
            textColor="black"
            mode="time"
            display="inline"
            is24Hour={false}
            accentColor={Colors.blue.color}
            onChange={onChangecallback}
            //themeVariant="light"
            minuteInterval={30}
        />
    );
};

const styles = StyleSheet.create({
    picker: {
        backgroundColor: Colors.offWhite.color,
        minWidth: 80,
    },
});
export default TimePicker;
