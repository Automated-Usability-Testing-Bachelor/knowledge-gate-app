import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import Colors from "../../constants/Colors";
import ActualCalendar from "./actualCalendar";
import AvailabilityHeader from "./AvailabilityHeader";
import ScheduleBtn from "./ScheduleBtn";
import {
    addAvailability,
    editAvailabilityTimeById,
    getAvailabilityById,
    getCalendarDataFromCurrentMonth,
} from "../../mocks/CalendarMockData";
import moment from "moment";
import ScheduleAvailabilityModal from "./scheduleModal/ScheduleAvailabilityModal";
import AvailabilitiesView from "./AvailabilitiesView";

const CalendarBody = ({selectedDayHeaderCallback}) => {
    const [edittingId, setEdittingId] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalStartTimeRange, setModalStartTimeRange] = useState(
        setInitialTimeRange()
    );
    const [isModalEditing, setIsModalEditing] = useState(false);
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
    };
    const selectedDayCallback = (date) => {
        selectedDayHeaderCallback(date);
        setCurrentDate(date);
    };
    const onEditAvailability = (id) => {
        setEdittingId(id);
        let av = getAvailabilityById(id);
        setModalStartTimeRange({
            from: av.from.toDate(),
            to: av.to.toDate(),
        });
        setIsModalEditing(true);
        setShowModal(true);
    };

    const getscheduledTime = (timeRange) => {
        if (isModalEditing) {
            setIsModalEditing(false);
            let data = editAvailabilityTimeById(edittingId, timeRange);
            setEdittingId("");
            setModalStartTimeRange(setInitialTimeRange());
        } else {
            addAvailability(timeRange, currentDate);
        }
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
        <View style={styles.container}>
            <AvailabilitiesView
                header={
                    <>
                        <ActualCalendar
                            datesWithAvailabilities={datesWithAvailabilities}
                            selectedDayCallback={selectedDayCallback}
                            currentMonthCallback={currentMonthCallback}
                        />
                        <AvailabilityHeader/>
                    </>}
                footer={
                    <>
                        <ScheduleBtn ShowModalCallback={ShowModalCallback}/>
                        <ScheduleAvailabilityModal
                            closeModal={closeModal}
                            showModal={showModal}
                            getTimeRangeCallback={getscheduledTime}
                            modalStartTimeRange={modalStartTimeRange}
                        />
                    </>
                }
                currentDate={currentDate}
                onEditCallback={onEditAvailability}
            />

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
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

function roundMinutes(date) {
    date.setHours(date.getHours() + Math.round(date.getMinutes() / 60));
    date.setMinutes(0, 0, 0); // Resets also seconds and milliseconds

    return date;
}

function addHours(date, hours) {
    date.setHours(date.getHours() + hours);

    return date;
}

function setInitialTimeRange() {
    return {
        from: roundMinutes(new Date()),
        to: addHours(roundMinutes(new Date()), 1),
    };
}
