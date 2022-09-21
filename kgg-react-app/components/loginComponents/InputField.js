import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Colors from "../../constants/Colors";

const InputField = ({ prompt }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        placeholder={prompt}
        placeholderTextColor={Colors.darkGrey.color}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  input: {
    backgroundColor: Colors.offWhite.color,
    padding: 5,
    borderRadius: 5,
    paddingLeft: 15,
  },
});

export default InputField;
