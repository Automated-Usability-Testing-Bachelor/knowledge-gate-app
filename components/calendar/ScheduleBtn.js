import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import RedButton from "../RedButton";
import PlusIcon from "./PlusIcon";

const ScheduleBtn = ({ ShowModalCallback }) => {
  return (
    <View style={styles.container}>
      <RedButton
        name="schedule"
        onPress={ShowModalCallback}
        icon={
          <View style={styles.box}>
            <PlusIcon />
          </View>
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { paddingHorizontal: 25, marginBottom: 25 },
});

export default ScheduleBtn;
