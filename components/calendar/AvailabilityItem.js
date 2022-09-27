import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import ClockIcon from "./clockIcon";
import ThreeDotsIcon from "../ThreeDotsIcon";

const AvailabilityItem = ({ from, to }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.clockText}>
          <ClockIcon />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{`${from.format("hh:mm A")} - ${to.format(
              "hh:mm A"
            )}`}</Text>
          </View>
        </View>
        <ThreeDotsIcon />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { paddingHorizontal: 25, marginVertical: 10 },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
  },
  clockText: {
    flexDirection: "row",
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
