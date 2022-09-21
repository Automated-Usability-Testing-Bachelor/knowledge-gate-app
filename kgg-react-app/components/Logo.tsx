import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

const Logo = () => {
  const icon = require("./whiteLogo.png");
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    //backgroundColor: "#000",
  },

  logo: {
    width: 189,
    height: 211,
  },
});

export default Logo;
