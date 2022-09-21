import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

const Logo = () => {
  const icon = require("../../assets/logos/AdditionalLockups/Lockup02/whiteLogo.png");
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "#000",
    flex: 3,
    //minHeight: 200,

    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 189,
    height: 211,
  },
});

export default Logo;