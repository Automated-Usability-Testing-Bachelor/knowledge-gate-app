import React, {useState} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/Colors";
import ActualCalendar from "./actualCalendar";
import AvailabilityHeader from "./AvailabilityHeader";
import AvailabilityItem from "./AvailabilityItem";
import ScheduleBtn from "./ScheduleBtn";
import {Overlay} from "react-native-elements";

const CalendarBody = ({selectedDayCallback}) => {
    const [showModal, setShowModal] = useState(false);
    const ShowModalCallback = () => {
        setShowModal(true);
    };
    const onRequestModalClose = () => {
        setShowModal(false);
    };
    const overLayOnPressBackDrop = () => {
        setShowModal(false);
    };
    return (
        <ScrollView style={styles.container}>
            <ActualCalendar selectedDayCallback={selectedDayCallback}/>
            <AvailabilityHeader/>
            <AvailabilityItem/>
            <AvailabilityItem/>
            <AvailabilityItem/>
            <AvailabilityItem/>
            <AvailabilityItem/>
            <ScheduleBtn ShowModalCallback={ShowModalCallback}/>
            <Overlay
                style={styles.overlay}
                isVisible={showModal}
                transparent={true}
                onRequestClose={onRequestModalClose}
                animationType="slide"
                onBackdropPress={overLayOnPressBackDrop}
            >
                <View style={styles.modal}>
                    <Text>hello</Text>
                </View>
            </Overlay>
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
    overlay: {},
    modal: {
        //justifyContent: "flex-end",
        backgroundColor: "yellow",
        //alignSelf: "stretch",
    },
});

export default CalendarBody;
