import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import LoginHeader from "./LoginHeader";
import InputField from "./InputField";
import LoginBtn from "./LoginBtn";

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <LoginHeader />
      <InputField labelName="Email" prompt="type your email" />
      <InputField labelName="Email" prompt="type your email" />
      <LoginBtn name="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "yellow",
  },
  header: {},
});

export default LoginForm;
