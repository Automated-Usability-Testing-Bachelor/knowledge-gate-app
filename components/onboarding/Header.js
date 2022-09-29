import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import FadeInView from "../animatedComponents/FadeInView";
import { BlueSerifHeader1 } from "../Texts/Headers";
const Header = ({ text }) => {
  return (
    <View style={styles.container}>
      <FadeInView duration={2000}>
        <BlueSerifHeader1 text={text} />
      </FadeInView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default Header;
