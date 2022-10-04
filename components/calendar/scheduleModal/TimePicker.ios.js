import DateTimePicker from "@react-native-community/datetimepicker";
import { View, StyleSheet } from "react-native";
const TimePicker = ({ show, date, onChangecallback, minuteInterval }) => {
  console.log("ios");
  return (
    <View style={styles.picker}>
      {show ? (
        <DateTimePicker
          style={styles.picker}
          testID="fromPicker"
          value={date}
          textColor="black"
          minimumDate={new Date()}
          mode="time"
          display="spinner"
          is24Hour={false}
          onChange={onChangecallback}
          minuteInterval={minuteInterval}
          accentColor="yellow"
        />
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    backgroundColor: "yellow",
    width: 320,
  },
});
export default TimePicker;
