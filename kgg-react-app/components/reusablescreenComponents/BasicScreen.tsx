import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import Colors from "../../constants/Colors";
import Logo from "../Logo";
export default function BasicScreen({}) {
  return (
    <SafeAreaProvider style={styles.container}>
      <Logo />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue.color,
  },
});
