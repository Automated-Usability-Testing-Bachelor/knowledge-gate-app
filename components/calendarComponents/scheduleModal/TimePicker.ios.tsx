import React, { useCallback } from 'react'
import DateTimePicker, {
  DateTimePickerEvent
} from '@react-native-community/datetimepicker'
import { StyleSheet } from 'react-native'
import Colors from '../../../constants/Colors'

const styles = StyleSheet.create({
  picker: {
    backgroundColor: Colors.offWhite.color,
    minWidth: 80
  }
})

export type Props = {
  date: Date
  onChangecallback: (date: Date | undefined) => void
}

const TimePicker: React.FC<Props> = ({ date, onChangecallback }) => {
  const onChange = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    (event: DateTimePickerEvent, date?: Date | undefined) => {
      onChangecallback(date)
    },
    [onChangecallback]
  )

  return (
    <DateTimePicker
      style={styles.picker}
      value={date}
      textColor={'black'}
      mode={'time'}
      display={'inline'}
      accentColor={Colors.blue.color}
      onChange={onChange}
      // themeVariant="light"
      minuteInterval={30}
    />
  )
}

export default TimePicker
