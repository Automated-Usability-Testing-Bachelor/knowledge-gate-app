import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import CalendarPicker, {
  CustomDateStyle,
  CustomDayHeaderStylesFunc
} from 'react-native-calendar-picker'
import moment, { Moment } from 'moment'
import { ChevronLeftIcon, ChevronRightIcon } from 'react-native-heroicons/solid'
import Colors from '../../constants/Colors'
import { textStyles } from '../Texts/Headers'
import FadeInView from '../animatedComponents/FadeInView'
import { DateWithAvailability } from '../../mocks/CalendarMockData'
import Logo from '../../assets/logos/Logomark/KGG_Logomark_Blue_RGB.svg'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20
  },
  leftArrow: {
    height: 18,
    width: 18,
    color: Colors.red.color
  },
  dayLabel: { borderTopWidth: 0, borderBottomWidth: 0 },
  month: {
    color: Colors.red.color,
    fontSize: 18,
    fontFamily: 'Serif-Bold'
  },
  year: {
    color: Colors.red.color,
    fontSize: 18,
    fontFamily: 'Sans-Regular'
  },
  header: {
    color: Colors.red.color,
    paddingHorizontal: 20,
    paddingBottom: 10
  },
  TodayText: {
    color: '#FFFFFF'
  },
  selectedText: {
    color: '#FFF'
  },
  logoContainer: {
    paddingTop: 97,
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    opacity: 0.1
  }
})

export type Props = {
  datesWithAvailabilities: DateWithAvailability[]
  selectedDayCallback: (date: Moment) => void
  currentMonthCallback: (month: Moment) => void
}

const ActualCalendar: React.FC<Props> = ({
  datesWithAvailabilities,
  selectedDayCallback,
  currentMonthCallback
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [startSelectedDate, setSelectedStartDate] = useState(new Date())
  const [customDatesStyles, setCustomDatesStyles] = useState<CustomDateStyle[]>(
    []
  )
  const [selectedMonthYear, setSelectedMonthYear] = useState(
    moment().startOf('month')
  )

  const dateContainsAvailability = useCallback(
    (day: moment.Moment, arr: CustomDateStyle[]) => {
      let dayHasAvailability = false
      datesWithAvailabilities.forEach((element: DateWithAvailability) => {
        let avDate = element.date.clone()
        avDate = avDate.startOf('day')

        if (
          day.startOf('day').isSame(avDate, 'day') &&
          element.availabilities.length > 0
        ) {
          arr.push({
            date: day.clone(),
            style: {
              backgroundColor: Colors.blue.color
            },
            textStyle: {
              color: '#FFFFFF'
            }
          })
          dayHasAvailability = true
        }
      })

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!dayHasAvailability) {
        arr.push({
          date: day.clone(),
          style: {},
          textStyle: {} // sets the font color
        })
      }
    },
    [datesWithAvailabilities]
  )
  const changeCustomDatesStyle = useCallback(
    (date: moment.Moment) => {
      const startOfMonth = date.clone()
      const day = date
      const dateStyles: CustomDateStyle[] = []
      while (day.add(1, 'day').isSame(startOfMonth, 'month')) {
        dateContainsAvailability(day.clone(), dateStyles)
      }
      setCustomDatesStyles(dateStyles)
    },
    [dateContainsAvailability]
  )
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [selectedMonthYear])
  useEffect(() => {
    const tempMonth = selectedMonthYear.clone()

    changeCustomDatesStyle(tempMonth)
  }, [changeCustomDatesStyle, datesWithAvailabilities, selectedMonthYear])

  const customDayHeaderStyles: CustomDayHeaderStylesFunc = () => {
    return {
      textStyle: {
        color: textStyles.blackSerifHeader4.color,
        fontFamily: textStyles.blackSerifHeader4.fontFamily,
        fontSize: textStyles.blackSerifHeader4.fontSize
      }
    }
  }

  const onDateChange = useCallback(
    (date: Moment) => {
      selectedDayCallback(date)
    },
    [selectedDayCallback]
  )

  const onMonthChange = useCallback(
    (currentMonthYear: moment.Moment) => {
      setSelectedMonthYear(currentMonthYear)
      changeCustomDatesStyle(selectedMonthYear)
      currentMonthCallback(currentMonthYear)
    },
    [changeCustomDatesStyle, currentMonthCallback, selectedMonthYear]
  )

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo width={310} height={270} />
      </View>
      <FadeInView duration={1000} style={undefined}>
        <CalendarPicker
          startFromMonday
          previousComponent={
            <ChevronLeftIcon size={20} fill={Colors.red.color} />
          }
          nextComponent={<ChevronRightIcon size={20} fill={Colors.red.color} />}
          dayLabelsWrapper={styles.dayLabel}
          monthTitleStyle={styles.month}
          yearTitleStyle={styles.year}
          // scrollable={true}
          selectMonthTitle={'Select a Month in '}
          headerWrapperStyle={styles.header}
          todayBackgroundColor={'rgba(221, 38, 56, 0.5)'}
          todayTextStyle={styles.TodayText}
          selectedDayColor={Colors.red.color}
          selectedDayTextStyle={styles.selectedText}
          selectedDayStyle={{
            backgroundColor: Colors.red.color,
            transform: [{ scale: 1 }]
          }}
          showDayStragglers
          headingLevel={3}
          // eslint-disable-next-line react/jsx-no-bind
          customDayHeaderStyles={customDayHeaderStyles}
          onDateChange={onDateChange}
          customDatesStyles={customDatesStyles}
          onMonthChange={onMonthChange}
          selectedStartDate={startSelectedDate}
          textStyle={{ fontFamily: textStyles.blackSerifBody1.fontFamily }}
          minDate={moment().startOf('year').toDate()}
        />
      </FadeInView>
    </View>
  )
}

export default ActualCalendar
