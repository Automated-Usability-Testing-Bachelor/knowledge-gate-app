import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import { BlueSerifHeader2 } from "../../Texts/Headers";
import Modal from "react-native-modal";
import TimeSelectionView from "./TimeSelectionView";
import RedButton from "../../RedButton";

const ScheduleAvailabilityModal = ({
  showModal,
  closeModal,
  getTimeRangeCallback,
}) => {
  const [cachedTimeRange, setCachedTimeRange] = useState({});
  const getTimeRange = (timeRange) => {
    setCachedTimeRange(timeRange);
  };

  const onPressSave = () => {
    getTimeRangeCallback(cachedTimeRange);
    closeModal();
  };

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
            <TimeSelectionView returnTimeRangeCallback={getTimeRange} />
            <RedButton name="save" onPress={onPressSave} />
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
