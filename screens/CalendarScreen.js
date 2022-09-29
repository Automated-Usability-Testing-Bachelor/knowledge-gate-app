import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import SecondLogo from "../components/SecondLogo";
import HeaderView from "../components/calendar/HeaderView";

const CalendarScreen = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <SecondLogo />
      <HeaderView />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue.color,
    display: "flex",
    flex: 1,
    paddingTop: 0,
  },
});

export default CalendarScreen;
