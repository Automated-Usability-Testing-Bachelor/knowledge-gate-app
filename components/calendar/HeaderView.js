import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import Colors from "../../constants/Colors";
import CalendarBody from "./CalendarBody";
import CalendarHeaderText from "./CalenderHeaderText";
import moment from "moment";

const HeaderView = () => {
    const [currentDate, setCurrentDate] = useState(moment());
    const selectedDayCallback = (date) => {
        setCurrentDate(date);
        console.log(date.date());
    };
    return (
        <View style={styles.container}>
            <CalendarHeaderText date={currentDate}/>
            <CalendarBody selectedDayHeaderCallback={selectedDayCallback}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.warmGrey.color,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "100%",
    },
});

export default HeaderView;
