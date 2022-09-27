import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import RedButton from "../RedButton";

const LoginBtn = ({ name }) => {
  const onPress = () => null;
  return (
    <View style={styles.container}>
      <RedButton name={name} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});

export default LoginBtn;
