import DateTimePicker from "@react-native-community/datetimepicker";
import {View} from "react-native";

const TimePicker = ({show, date, onChangecallback, minuteInterval}) => {
    console.log("android");
    return (
        <View>
            {show ? (
                <DateTimePicker
                    value={date}
                    minimumDate={new Date()}
                    mode="time"
                    display="default"
                    is24Hour={false}
                    onChange={onChangecallback}
                    minuteInterval={minuteInterval}
                />
            ) : (
                <View></View>
            )}
        </View>
    );
};

export default TimePicker;
