import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import PlusIcon from "./PlusIcon";

const ScheduleBtn = ({ ShowModalCallback }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={ShowModalCallback}>
        <View style={styles.box}>
          <PlusIcon />
          <Text style={styles.text}>Schedule</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { paddingHorizontal: 25, marginBottom: 25 },
  box: {
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: Colors.red.color,
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  text: {
    color: "#FFF",
    lineHeight: 18,
  },
});

export default ScheduleBtn;
