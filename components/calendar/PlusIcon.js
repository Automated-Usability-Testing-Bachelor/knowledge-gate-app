import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const PlusIcon = () => {
  const icon = require("./PlusCircle.png");
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={icon} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { paddingRight: 5 },
  image: {
    height: 18,
    width: 18,
  },
});

export default PlusIcon;
