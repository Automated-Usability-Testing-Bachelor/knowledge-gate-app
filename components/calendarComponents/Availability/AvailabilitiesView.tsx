import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  NoAvailabilityContainer: {
    paddingHorizontal: 25,
    paddingVertical: 10
  }
})

export type Props = {
  header: React.ReactElement
  footer: React.ReactElement
}
const AvailabilitiesView: React.FC<Props> = ({ header, footer }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={styles.container}
        ListHeaderComponent={header}
        ListFooterComponent={footer}
      />
    </View>
  )
}

export default AvailabilitiesView
