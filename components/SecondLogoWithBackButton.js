import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Arrow from "./Arrow";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";

const SecondLogoWithBackButton = () => {
  //const icon = require("../assets/logos/Primary_Logo/KGG_PrimaryLogo_White_RGB_1.png");
  const icon = require("./whiteLogo.png");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Arrow
        isRight={false}
        backgroundColor={Colors.red.color}
        onPress={() => navigation.goBack()}
      />

      <Image style={styles.logo} source={icon} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 5,
  },
  logo: {
    width: 169,
    height: 52,
  },
});

export default SecondLogoWithBackButton;
