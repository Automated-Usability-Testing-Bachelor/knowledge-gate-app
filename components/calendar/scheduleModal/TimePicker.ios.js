import DatePicker from "react-native-date-picker";
import { StyleSheet, View } from "react-native";

const TimePicker = ({ show, date, onChangecallback, minuteInterval }) => {
  console.log("ios");
  console.log(show);
  return (
    <View>
      <DatePicker
        open={show}
        date={date}
        onChange={(event, date) => {
          onChangecallback(event, date);
        }}
        onCancel={() => {
          onChangecallback(undefined, undefined);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  datePicker: {
    backgroundColor: "yello",
  },
});

export default TimePicker;
