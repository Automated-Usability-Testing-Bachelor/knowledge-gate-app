import React, { useState } from 'react'
import moment from 'moment/moment'
import BackgroundCards from '../components/BackgroundTemplate'
import CalendarHeaderText from '../components/calendarComponents/CalenderHeaderText'
import CalendarBody from '../components/calendarComponents/CalendarBody'

const CalendarScreen = ({}) => {
  const [currentDate, setCurrentDate] = useState(moment())
  const selectedDayCallback = (date: moment.Moment) => {
    setCurrentDate(date)
  }

  return (
    <BackgroundCards
      header={CalendarHeaderText({ date: currentDate })}
      body={CalendarBody({ selectedDayHeaderCallback: selectedDayCallback })}
    />
  )
}

export default CalendarScreen
