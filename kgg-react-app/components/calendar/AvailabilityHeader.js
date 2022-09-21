import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const AvailabilityHeader = ({ selectedDayCallback }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Availability</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { paddingLeft: 25 },
  text: {
    fontSize: 20,
    color: Colors.blue.color,
  },
});

export default AvailabilityHeader;
