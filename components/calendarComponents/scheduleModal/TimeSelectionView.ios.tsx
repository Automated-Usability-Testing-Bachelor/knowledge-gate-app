import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import moment from 'moment'
// eslint-disable-next-line import/no-unresolved
import TimePicker from './TimePicker'
import { MomentTimeRange } from '../../../mocks/CalendarMockData'

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
  const [fromDate, setFromDate] = useState(startFrom)
  const [toDate, setToDate] = useState(startTo)

  const onFromChange = useCallback(
    (date: Date) => {
      const currentDate = date
      const newDate = new Date(currentDate)
      setFromDate(newDate)
      const newTimeRange = { from: moment(newDate), to: moment(toDate) }
      returnTimeRangeCallback(newTimeRange)
    },
    [returnTimeRangeCallback, toDate]
  )

  const onToChange = useCallback(
    (date: Date) => {
      const currentDate = date
      const newDate = new Date(currentDate)
      setToDate(new Date(currentDate))
      const newTimeRange = { from: moment(fromDate), to: moment(newDate) }
      returnTimeRangeCallback(newTimeRange)
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

export default TimeSelectionView
