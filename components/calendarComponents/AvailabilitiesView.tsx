import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import AvailabilityItem from './AvailabilityItem'
import { getAvailabilitiesFromDay } from '../../mocks/CalendarMockData'

import NoAvailability from '../NoDataComponents/NoAvailabilities'

export type Props = {
  currentDate: moment.Moment
}
const AvailabilitiesView: React.FC<Props> = ({
  currentDate,
  onEditCallback,
  header,
  footer
}) => {
  const [currentAvailabilities, setCurrentAvailabilities] = useState([])

  useEffect(() => {
    updateAvailabilityOnCurrentDate(currentDate)
  }, [currentDate])

  const updateAvailabilityOnCurrentDate = (currentDate) => {
    const data = getAvailabilitiesFromDay(currentDate)

    if (data != undefined) {
      setCurrentAvailabilities(data.availabilities)
    } else if (data === undefined || data.length == 0) {
      setCurrentAvailabilities([])
    }
  }

  const onDeleteAvailability = (id, currentAvailabilities) => {
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
    <View>
      <FlatList
        style={styles.container}
        ListHeaderComponent={header}
        ListFooterComponent={footer}
        data={currentAvailabilities}
        keyExtractor={(item) => item.id}
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
