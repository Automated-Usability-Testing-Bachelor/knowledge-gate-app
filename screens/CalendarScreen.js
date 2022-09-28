import {StatusBar} from "expo-status-bar";
import {StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import SecondLogo from "../components/SecondLogo";
import HeaderView from "../components/calendar/HeaderView";

const CalendarScreen = ({}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light"/>
            <SecondLogo/>
            <HeaderView/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.blue.color,
        display: "flex",
        flex: 1,
    },
});

export default CalendarScreen;
