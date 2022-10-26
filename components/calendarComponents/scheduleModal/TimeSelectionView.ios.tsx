import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import moment from 'moment'
import TimePicker from './TimePicker'

export type Props = {
  returnTimeRangeCallback: Function
  startFrom: Date
  startTo: Date
}

const TimeSelectionView: React.FC<Props> = ({
  returnTimeRangeCallback,
  startFrom,
  startTo
}) => {
  const [fromDate, setFromDate] = useState(startFrom)
  const [toDate, setToDate] = useState(startTo)
  const initialTimeRange = {
    from: fromDate,
    to: toDate
  }

  const onFromChange = (date: Date) => {
    console.log(date)
    const currentDate = date

    const newDate = new Date(currentDate)
    setFromDate(newDate)
    const newTimeRange = { from: moment(newDate), to: moment(toDate) }
    returnTimeRangeCallback(newTimeRange)
  }
  const onToChange = (date: Date) => {
    const currentDate = date

    const newDate = new Date(currentDate)
    setToDate(new Date(currentDate))
    const newTimeRange = { from: moment(fromDate), to: moment(newDate) }
    returnTimeRangeCallback(newTimeRange)
  }
  useEffect(() => {
    const date = new Date(fromDate)
    date.setMinutes(date.getMinutes() + 30)

    if (
      moment(toDate).isBetween(moment(fromDate), moment(date)) ||
      moment(toDate).isSame(moment(fromDate)) ||
      moment(toDate).isBefore(moment(fromDate))
    ) {
      setToDate(date)
      const newTimeRange = { from: moment(fromDate), to: moment(date) }
      returnTimeRangeCallback(newTimeRange)
    } else {
      const newTimeRange = { from: moment(fromDate), to: moment(toDate) }
      returnTimeRangeCallback(newTimeRange)
    }
  }, [fromDate])

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.fromContainer}>
          <View>
            <Text>{'From'}</Text>
          </View>
          <View style={styles.timeContainer}>
            <TimePicker date={fromDate} onChangecallback={onFromChange} />
          </View>
        </View>

        <View style={styles.toContainer}>
          <View>
            <Text>{'To'}</Text>
          </View>
          <View style={styles.timeContainer}>
            <TimePicker date={toDate} onChangecallback={onToChange} />
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
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
    marginLeft: 10
  }
})

export default TimeSelectionView
