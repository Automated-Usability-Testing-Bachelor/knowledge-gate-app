import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import moment from 'moment'
import AvailabilityItem from './AvailabilityItem'
import {
  getAvailabilitiesFromDay,
  Availability,
  DateWithAvailability
} from '../../mocks/CalendarMockData'

import NoAvailability from '../NoDataComponents/NoAvailabilities'
import SwipeableAvailabilityItem from './SwipeableAvailabilityItem'

export type Props = {
  currentDate: moment.Moment
  onEditCallback: Function
  header: React.ReactElement
  footer: React.ReactElement
}
const AvailabilitiesView: React.FC<Props> = ({
  currentDate,
  onEditCallback,
  header,
  footer
}) => {
  const [currentAvailabilities, setCurrentAvailabilities] = useState<
    Availability[]
  >([])

  useEffect(() => {
    updateAvailabilityOnCurrentDate(currentDate)
  }, [currentDate])

  const updateAvailabilityOnCurrentDate = (currentDate: moment.Moment) => {
    const data: DateWithAvailability | undefined =
      getAvailabilitiesFromDay(currentDate)

    if (data != undefined) {
      setCurrentAvailabilities(data.availabilities)
    } else if (data === undefined) {
      setCurrentAvailabilities([])
    }
  }

  const onDeleteAvailability = (
    id: string,
    currentAvailabilities: DateWithAvailability
  ) => {
    // update availabilities
    const data = currentAvailabilities

    if (
      data === undefined ||
      data.availabilities.length === 0 ||
      data.availabilities === undefined
    ) {
      setCurrentAvailabilities([])
    } else {
      const newData = data.availabilities
      const arr = []

      setCurrentAvailabilities(newData)
    }
  }

  return (
    <View style={{flex: 1}}>
        <FlatList
        style={styles.container}
        ListHeaderComponent={header}
        ListFooterComponent={footer}
        data={currentAvailabilities}
        keyExtractor={(item: Availability) => item.id.toString()}
        initialNumToRender={1}
        ListEmptyComponent={
          <View style={styles.NoAvailabilityContainer}>
            <NoAvailability />
          </View>
        }
        renderItem={({ item }) => (
          <AvailabilityItem
            from={item.from}
            to={item.to}
            id={item.id}
            onDeleteCallback={onDeleteAvailability}
            onEditCallback={onEditCallback}
          />
        )}
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

export default AvailabilitiesView
