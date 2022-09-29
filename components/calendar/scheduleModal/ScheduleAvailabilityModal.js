import React, {useEffect, useState} from "react";
import {StyleSheet, View} from "react-native";
import Colors from "../../../constants/Colors";
import {BlueSerifHeader2} from "../../Texts/Headers";
import Modal from "react-native-modal";
import TimeSelectionView from "./TimeSelectionView";
import RedButton from "../../RedButton";
import moment from "moment";

const ScheduleAvailabilityModal = ({
                                       showModal,
                                       closeModal,
                                       getTimeRangeCallback,
                                       modalStartTimeRange,
                                       isEditing,
                                   }) => {
    const initialTimeRange = {
        from: moment(modalStartTimeRange.from),
        to: moment(modalStartTimeRange.to),
    };
    const [cachedTimeRange, setCachedTimeRange] = useState(initialTimeRange);
    const getTimeRange = (timeRange) => {
        setCachedTimeRange(timeRange);
    };

    const onPressSave = () => {
        getTimeRangeCallback(cachedTimeRange);
        closeModal();
    };
    useEffect(() => {
        setCachedTimeRange(initialTimeRange);
    }, [showModal]);

    return (
        <View>
            <Modal
                isVisible={showModal}
                backdropOpacity={0.3}
                onBackdropPress={closeModal}
                swipeDirection={["down"]}
                style={styles.modal}
                onSwipeComplete={closeModal}
                useNativeDriverForBackdrop
            >
                <View style={styles.containerOuter}>
                    <View style={styles.containerInner}>
                        <BlueSerifHeader2 text="Schedule Availability"></BlueSerifHeader2>
                        <TimeSelectionView
                            returnTimeRangeCallback={getTimeRange}
                            startFrom={modalStartTimeRange.from}
                            startTo={modalStartTimeRange.to}
                        />
                        <RedButton name="save" onPress={onPressSave}/>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
const styles = StyleSheet.create({
    modal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    containerOuter: {
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: Colors.warmGrey.color,
    },
    containerInner: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: Colors.offWhite.color,
        padding: 30,
    },
});

export default ScheduleAvailabilityModal;

function roundMinutes(date) {
    date.setHours(date.getHours() + Math.round(date.getMinutes() / 60));
    date.setMinutes(0, 0, 0); // Resets also seconds and milliseconds

    return date;
}

function addHours(date, hours) {
    date.setHours(date.getHours() + hours);

    return date;
}
