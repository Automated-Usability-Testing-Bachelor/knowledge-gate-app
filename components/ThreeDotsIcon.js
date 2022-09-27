import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

const ThreeDotsIcon = ({ onPressCallback }) => {
  //const icon = require("../assets/logos/Primary_Logo/KGG_PrimaryLogo_White_RGB_1.png");
  const icon = require("./calendar/three_dots.png");

  return (
    <TouchableOpacity style={styles.container} onPress={onPressCallback}>
      <View style={styles.container}>
        <Image style={styles.logo} source={icon} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: { paddingLeft: 15 },
  logo: {
    width: 24,
    height: 24,
  },
});

export default ThreeDotsIcon;
