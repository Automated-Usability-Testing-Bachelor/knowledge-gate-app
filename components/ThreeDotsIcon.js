import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ThreeDotsIcon = () => {
  //const icon = require("../assets/logos/Primary_Logo/KGG_PrimaryLogo_White_RGB_1.png");
  const icon = require("./calendar/three_dots.png");

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={icon} />
    </View>
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
