import React, { useCallback, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import moment, { Moment } from 'moment'
import ActualCalendar from './actualCalendar'
import ScheduleBtn from './Availability/ScheduleBtn'
import {
  addAvailability,
  Availability,
  DateWithAvailability,
  editAvailabilityTimeById,
  getAvailabilityById,
  getCalendarDataFromCurrentMonth,
  MomentTimeRange
} from '../../mocks/CalendarMockData'
// eslint-disable-next-line import/no-cycle
import ScheduleAvailabilityModal from './scheduleModal/ScheduleAvailabilityModal'
import AvailabilitiesView from './Availability/AvailabilitiesView'
import AvailabilityHeader from './Availability/AvailabilityHeader'
import SwipeableAvailabilityView from './Availability/SwipeableAvailabilityView'

function roundMinutes(date: Date) {
  date.setHours(date.getHours() + Math.round(date.getMinutes() / 60))
  date.setMinutes(0, 0, 0) // Resets also seconds and milliseconds

  return date
}

function addHours(date: Date, hours: number) {
  date.setHours(date.getHours() + hours)

  return date
}

function setInitialTimeRange() {
  return {
    from: roundMinutes(new Date()),
    to: addHours(roundMinutes(new Date()), 1)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  NoAvailabilityContainer: {
    paddingHorizontal: 25,
    paddingVertical: 10
  }
})

export type Props = {
  selectedDayHeaderCallback: (date: Moment) => void
}

export type DateTimeRange = {
  from: Date
  to: Date
}

const CalendarBody: React.FC<Props> = ({ selectedDayHeaderCallback }) => {
  const [edittingId, setEdittingId] = useState<string | number[]>('')
  const [showModal, setShowModal] = useState(false)
  const [modalStartTimeRange, setModalStartTimeRange] = useState<DateTimeRange>(
    setInitialTimeRange()
  )
  const [isModalEditing, setIsModalEditing] = useState(false)
  const initialDatesWithAv: DateWithAvailability[] =
    getCalendarDataFromCurrentMonth(moment())
  const [datesWithAvailabilities, setDatesWithAvailability] =
    useState<DateWithAvailability[]>(initialDatesWithAv)
  const [currentDate, setCurrentDate] = useState(moment())
  const ShowModalCallback = useCallback(() => {
    setShowModal(true)
  }, [])
  const closeModal = useCallback(() => {
    setShowModal(false)
  }, [])
  const currentMonthCallback = useCallback((date: moment.Moment) => {
    setDatesWithAvailability(getCalendarDataFromCurrentMonth(date))
  }, [])
  const selectedDayCallback = useCallback(
    (date: moment.Moment) => {
      selectedDayHeaderCallback(date)
      setCurrentDate(date)
    },
    [selectedDayHeaderCallback]
  )

  const onEditAvailability = useCallback((id: string | number[]) => {
    setEdittingId(id)
    const av: Availability | undefined = getAvailabilityById(id)

    if (av !== undefined) {
      setModalStartTimeRange({
        from: av.from.toDate(),
        to: av.to.toDate()
      })
      setIsModalEditing(true)
      setShowModal(true)
    }
  }, [])

  const getscheduledTime = useCallback(
    (timeRange: MomentTimeRange) => {
      if (isModalEditing) {
        setIsModalEditing(false)
        editAvailabilityTimeById(edittingId, timeRange)
        setEdittingId('')
        setModalStartTimeRange(setInitialTimeRange())
      } else {
        addAvailability(timeRange, currentDate)
      }
      // for refreshing availabilities view
      setCurrentDate(currentDate.clone())

      // refreshing calendar styling
      let month = currentDate.clone()
      month = month.startOf('month')
      const arr: DateWithAvailability[] = []
      const newData: DateWithAvailability[] =
        getCalendarDataFromCurrentMonth(month)

      for (let i = 0; i < newData.length; i += 1) {
        arr.push({ ...newData[i] })
      }
      setDatesWithAvailability(arr)
    },
    [currentDate, edittingId, isModalEditing]
  )

  return (
    <View style={styles.container}>
      <AvailabilitiesView
        header={
          <>
            <ActualCalendar
              datesWithAvailabilities={datesWithAvailabilities}
              selectedDayCallback={selectedDayCallback}
              currentMonthCallback={currentMonthCallback}
            />
            <AvailabilityHeader />
            <SwipeableAvailabilityView
              currentDate={currentDate}
              onEditCallback={onEditAvailability}
            />
          </>
        }
        footer={
          <>
            <ScheduleBtn ShowModalCallback={ShowModalCallback} />
            <ScheduleAvailabilityModal
              closeModal={closeModal}
              showModal={showModal}
              getTimeRangeCallback={getscheduledTime}
              modalStartTimeRange={modalStartTimeRange}
            />
          </>
        }
      />
    </View>
  )
}

export default CalendarBody
