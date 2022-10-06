import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Animated } from "react-native";
import moment from "moment";
import { BlackSansHeader2, BlueSerifHeader2 } from "../Texts/Headers";

const CalendarHeaderText = ({ date }) => {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));
  const animationFadeIn = Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 50,
    useNativeDriver: true,
  });
  useEffect(() => {
    animationFadeIn.reset();
    animationFadeIn.start();
  }, [date]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: 1, // Bind opacity to animated value
        },
      ]}
    >
      <BlackSansHeader2 text={date.format("dddd, MMMM Do")} />
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
});

export default CalendarHeaderText;
