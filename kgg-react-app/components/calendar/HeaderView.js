import React, {useState} from "react";
import {ScrollView, StyleSheet} from "react-native";
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
        <ScrollView contentContainerStyle={styles.container}>
            <CalendarHeaderText date={currentDate}/>
            <CalendarBody selectedDayCallback={selectedDayCallback}/>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.warmGrey.color,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
});

export default HeaderView;
