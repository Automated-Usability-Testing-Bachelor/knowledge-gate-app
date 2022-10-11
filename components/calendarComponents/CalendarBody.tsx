import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import moment from 'moment'
import ActualCalendar from './actualCalendar'
import ScheduleBtn from './ScheduleBtn'
import {
  addAvailability,
  Availability,
  editAvailabilityTimeById,
  getAvailabilityById,
  getCalendarDataFromCurrentMonth,
  MomentTimeRange
} from '../../mocks/CalendarMockData'
import ScheduleAvailabilityModal from './scheduleModal/ScheduleAvailabilityModal'
import AvailabilitiesView from './AvailabilitiesView'
import AvailabilityHeader from './AvailabilityHeader'

export type Props = {
  selectedDayHeaderCallback: Function
}

export type DateTimeRange = {
  from: Date
  to: Date
}

const CalendarBody: React.FC<Props> = ({ selectedDayHeaderCallback }) => {
  const [edittingId, setEdittingId] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalStartTimeRange, setModalStartTimeRange] = useState<DateTimeRange>(
    setInitialTimeRange()
  )
  const [isModalEditing, setIsModalEditing] = useState(false)
  const initialDatesWithAv = getCalendarDataFromCurrentMonth(moment())
  const [datesWithAvailabilities, setDatesWithAvailability] =
    useState(initialDatesWithAv)
  const [currentDate, setCurrentDate] = useState(moment())
  const ShowModalCallback = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }
  const currentMonthCallback = (date: moment.Moment) => {
    setDatesWithAvailability(getCalendarDataFromCurrentMonth(date))
  }
  const selectedDayCallback = (date: moment.Moment) => {
    selectedDayHeaderCallback(date)
    setCurrentDate(date)
  }
  const onEditAvailability = (id: string) => {
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
  }

  const getscheduledTime = (timeRange: MomentTimeRange) => {
    if (isModalEditing) {
      setIsModalEditing(false)
      const data = editAvailabilityTimeById(edittingId, timeRange)
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
    const arr = []
    const newData = getCalendarDataFromCurrentMonth(month)

    for (let i = 0; i < newData.length; i++) {
      arr.push({ ...newData[i] })
    }
    setDatesWithAvailability(arr)
  }

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
        currentDate={currentDate}
        onEditCallback={onEditAvailability}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  NoAvailabilityContainer: {
    paddingHorizontal: 25,
    paddingVertical: 10
  }
})

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

export default CalendarBody
