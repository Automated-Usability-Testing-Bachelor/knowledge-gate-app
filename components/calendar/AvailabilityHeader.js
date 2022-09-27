import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { BlueSerifHeader2 } from "../Texts/Headers";

const AvailabilityHeader = ({ selectedDayCallback }) => {
  return (
    <View style={styles.container}>
      <BlueSerifHeader2 text="Availability"></BlueSerifHeader2>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { paddingLeft: 25 },
});

export default AvailabilityHeader;
