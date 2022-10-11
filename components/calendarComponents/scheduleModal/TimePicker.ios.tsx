import React from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export type Props = {
  date: Date;
  onChangecallback: (date: Date) => void;
};

const TimePicker: React.FC<Props> = ({ date, onChangecallback }) => {
  return (
    <DateTimePicker
      style={styles.picker}
      value={date}
      textColor="black"
      mode="time"
      display="inline"
      is24Hour={false}
      accentColor={Colors.blue.color}
      onChange={(event: DateTimePickerEvent, date?: Date | undefined) =>
        onChangecallback(date)
      }
      //themeVariant="light"
      minuteInterval={30}
    />
  );
};

const styles = StyleSheet.create({
  picker: {
    backgroundColor: Colors.offWhite.color,
    minWidth: 80,
  },
});
export default TimePicker;
