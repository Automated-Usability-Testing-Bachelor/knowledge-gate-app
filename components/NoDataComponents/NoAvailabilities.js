import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { BlackSansBody1 } from "../Texts/Headers";
const NoAvailability = ({ text }) => {
  return (
    <View>
      <BlackSansBody1
        text={`You have yet to scedule any availability this date.`}
      />
    </View>
  );
};

export default NoAvailability;
