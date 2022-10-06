import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import SecondLogo from "../components/SecondLogo";
import HeaderView from "../components/calendar/HeaderView";

const CalendarScreen = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
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
