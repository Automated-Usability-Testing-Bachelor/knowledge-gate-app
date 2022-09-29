import React from "react";
import { Image, StyleSheet, View } from "react-native";

const OnboardingImage = ({ height, width, iconSource }) => {
  //const icon = require("../assets/logos/Primary_Logo/KGG_PrimaryLogo_White_RGB_1.png");

  return (
    <View style={styles.container}>
      <Image
        //resizeMode="center"
        style={{
          height: height,
          width: width,
        }}
        source={iconSource}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},

  logo: {},
});

export default OnboardingImage;
