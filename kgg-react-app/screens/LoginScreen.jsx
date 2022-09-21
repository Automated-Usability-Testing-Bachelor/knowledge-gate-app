import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ScrollView,  KeyboardAvoidingView } from "react-native";
import Colors from "../constants/Colors";
import Logo from "../components/Logo";
import LoginView from "../components/LoginView";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const LoginScreen = ({}) => {
  return (
    <SafeAreaProvider style={styles.container}>
      
      <KeyboardAvoidingView style={styles.avoid}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
      <ScrollView contentContainerStyle={styles.inner}>
        <Logo />
        <LoginView/>
         <LoginView/>
          <LoginView/>
           <LoginView/>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
     display: "flex",
    flexDirection: "column",
    backgroundColor: Colors.blue.color,
    
  },
  avoid: {
    flex: 1
  }, inner: {
    flex: 1,
    justifyContent: "space-between",
    
  }
});



export default LoginScreen;