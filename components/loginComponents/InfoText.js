import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

const InfoText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Your first time here? Look for an invitation to our platform in your
        e-mail inbox
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 20,
  },
  touchable: { borderRadius: 10 },
  text: {
    fontSize: 10,
    color: Colors.black.color,
  },
});

export default InfoText;
