import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Colors from "../constants/Colors";

const InputField = ({ labelName, prompt }) => {
  return (
    <View style={styles.container}>
      <Text>{labelName}</Text>
      <TextInput
        style={styles.input}
        placeholder={prompt}
        placeholderTextColor={Colors.darkGrey.color}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  input: {
    backgroundColor: Colors.offWhite.color,
  },
});

export default InputField;
