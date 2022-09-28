import React from "react";
import { View, Image, StyleSheet } from "react-native";

const SecondLogo = () => {
  //const icon = require("../assets/logos/Primary_Logo/KGG_PrimaryLogo_White_RGB_1.png");
  const icon = require("./whiteLogo.png");

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={icon} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 5,
  },
  logo: {
    width: 169,
    height: 52,
  },
});

export default SecondLogo;
