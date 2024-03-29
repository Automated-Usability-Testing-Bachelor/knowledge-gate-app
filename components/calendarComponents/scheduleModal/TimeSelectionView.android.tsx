import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import moment from 'moment'
import { DateTimePickerEvent } from '@react-native-community/datetimepicker'
// eslint-disable-next-line import/no-unresolved
import TimePicker from './TimePicker'
import { MomentTimeRange } from '../../../mocks/CalendarMockData'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  toContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  fromContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 20,
    paddingVertical: 10
  },
  timeContainer: {
    marginLeft: 10,
    paddingHorizontal: 15,
    paddingVertical: 11,
    backgroundColor: '#FFF',
    borderRadius: 10
  }
})

export type Props = {
  returnTimeRangeCallback: (timeRange: MomentTimeRange) => void
  startFrom: Date
  startTo: Date
}

const TimeSelectionView: React.FC<Props> = ({
  returnTimeRangeCallback,
  startFrom,
  startTo
}) => {
  const minuteInterval = 30
  const [fromDate, setFromDate] = useState(startFrom)
  const [toDate, setToDate] = useState(startTo)
  const initialTimeRange = {
    from: fromDate,
    to: toDate
  }

  const [fromString, setFromString] = useState(
    moment(fromDate).format('hh:mm A')
  )
  const [toString, setToString] = useState(moment(toDate).format('hh:mm A'))

  const [toShow, setToShow] = useState(false)
  const [fromShow, setFromShow] = useState(false)

  const openFromPicker = useCallback(() => {
    setFromShow(true)
  }, [])

  const openToPicker = useCallback(() => {
    setToShow(true)
  }, [])
  const onFromChange = useCallback(
    (event: DateTimePickerEvent, date: Date) => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (date === undefined) {
        setFromShow(false)

        return
      }
      setFromShow(false)
      const currentDate = date

      const newDate = new Date(currentDate)
      setFromDate(newDate)
      const newTimeRange = { from: moment(newDate), to: moment(toDate) }
      returnTimeRangeCallback(newTimeRange)
      setFromString(moment(currentDate).format('hh:mm A'))
    },
    [returnTimeRangeCallback, toDate]
  )
  const onToChange = useCallback(
    (event: DateTimePickerEvent, date: Date) => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (date === undefined) {
        setToShow(false)

        return
      }
      setToShow(false)

      const currentDate = date

      const newDate = new Date(currentDate)
      setToDate(new Date(currentDate))
      const newTimeRange = { from: moment(fromDate), to: moment(newDate) }
      returnTimeRangeCallback(newTimeRange)
      setToString(moment(currentDate).format('hh:mm A'))
    },
    [fromDate, returnTimeRangeCallback]
  )
  useEffect(() => {
    const date = new Date(fromDate)
    date.setMinutes(date.getMinutes() + 30)

    if (
      moment(toDate).isBetween(moment(fromDate), moment(date)) ||
      moment(toDate).isSame(moment(fromDate)) ||
      moment(toDate).isBefore(moment(fromDate))
    ) {
      setToDate(date)
      setToString(moment(date).format('hh:mm A'))
      const newTimeRange = { from: moment(fromDate), to: moment(date) }
      returnTimeRangeCallback(newTimeRange)
    } else {
      const newTimeRange = { from: moment(fromDate), to: moment(toDate) }
      returnTimeRangeCallback(newTimeRange)
    }
  }, [fromDate, returnTimeRangeCallback, toDate])

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={openFromPicker}>
          <View style={styles.fromContainer}>
            <Text>{'From'}</Text>
            <View style={styles.timeContainer}>
              <Text>{fromString}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={openToPicker}>
          <View style={styles.toContainer}>
            <Text>{'To'}</Text>
            <View style={styles.timeContainer}>
              <Text>{toString}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <TimePicker
        show={fromShow}
        date={fromDate}
        onChangecallback={onFromChange}
        minuteInterval={minuteInterval}
      />
      <TimePicker
        show={toShow}
        date={toDate}
        onChangecallback={onToChange}
        minuteInterval={minuteInterval}
      />
    </View>
  )
}

export default TimeSelectionView
