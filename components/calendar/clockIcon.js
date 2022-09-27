import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const ClockIcon = () => {
  const icon = require("./clockIcon.png");
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={icon} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { paddingRight: 5 },
  image: {
    height: 24,
    width: 24,
  },
});

export default ClockIcon;
