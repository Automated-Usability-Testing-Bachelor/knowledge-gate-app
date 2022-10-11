import DateTimePicker, {DateTimePickerEvent} from "@react-native-community/datetimepicker";
import {View} from "react-native";

export type Props = {
    show: boolean;
    date: Date;
    onChangecallback: (event: DateTimePickerEvent, date?: Date | undefined) => void;
    minuteInterval: number;
}

const TimePicker: React.FC<Props> = ({show, date, onChangecallback, minuteInterval}) => {
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
