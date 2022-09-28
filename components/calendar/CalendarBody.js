import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import Colors from "../../constants/Colors";
import ActualCalendar from "./actualCalendar";
import AvailabilityHeader from "./AvailabilityHeader";
import AvailabilityItem from "./AvailabilityItem";
import ScheduleBtn from "./ScheduleBtn";
import {getCalendarDataFromCurrentMonth} from "../../mocks/CalendarMockData";
import moment from "moment";
import ScheduleAvailabilityModal from "./scheduleModal/ScheduleAvailabilityModal";
import NoAvailability from "../NoDataComponents/NoAvailabilities";

const CalendarBody = ({selectedDayHeaderCallback}) => {
    const [showModal, setShowModal] = useState(false);
    const [showAvailability, setShowAvailability] = useState(false);
    const [currentAvailabilities, setCurrentAvailabilities] = useState([]);
    const [datesWithAvailabilities, setDatesWithAvailability] = useState(
        getCalendarDataFromCurrentMonth(moment())
    );
    const [currentDate, setCurrentDate] = useState(moment());
    const ShowModalCallback = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };
    const currentMonthCallback = (date) => {
        setDatesWithAvailability(getCalendarDataFromCurrentMonth(date));
    };
    const hasAvailabilityOnCurrentDate = () => {
        for (let i = 0; i < datesWithAvailabilities.length; i++) {
            let element = datesWithAvailabilities[i].date.clone();
            element = element.startOf("day");
            let date = currentDate.clone();
            date = date.startOf("day");
            if (date.isSame(element, "day")) {
                setCurrentAvailabilities(datesWithAvailabilities[i].availabilities);
                return;
            } else {
                setCurrentAvailabilities([]);
            }
        }
    };
    const selectedDayCallback = (date) => {
        selectedDayHeaderCallback(date);
        setCurrentDate(date);
    };
    useEffect(() => {
        hasAvailabilityOnCurrentDate();
    }, [currentDate]);
    const getscheduledTime = (timeRange) => {
    };

    return (
        <View style={styles.container}>
            <ActualCalendar
                datesWithAvailabilities={datesWithAvailabilities}
                selectedDayCallback={selectedDayCallback}
                currentMonthCallback={currentMonthCallback}
            />
            <AvailabilityHeader/>
            <FlatList
                data={currentAvailabilities}
                ListEmptyComponent={
                    <View style={styles.NoAvailabilityContainer}>
                        <NoAvailability/>
                    </View>
                }
                renderItem={({item}) => (
                    <AvailabilityItem from={item.from} to={item.to}/>
                )}
            />
            <ScheduleBtn ShowModalCallback={ShowModalCallback}/>
            <ScheduleAvailabilityModal
                closeModal={closeModal}
                showModal={showModal}
                getTimeRangeCallback={getscheduledTime}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: Colors.offWhite.color,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 0,
        height: "100%",
        paddingBottom: 120,
    },
    NoAvailabilityContainer: {
        paddingHorizontal: 25,
        paddingVertical: 10,
    },
});

export default CalendarBody;
