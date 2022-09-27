import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import ClockIcon from "./clockIcon";

const AvailabilityItem = ({ from, to }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <ClockIcon />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{`${from.format("hh:mm A")} - ${to.format(
            "hh:mm A"
          )}`}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { paddingHorizontal: 25, marginVertical: 10 },
  box: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
  },
  textContainer: {
    alignItems: "center",
    height: 24,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.black.color,
  },
});

export default AvailabilityItem;