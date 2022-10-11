import React from 'react'
import { StyleSheet, View } from 'react-native'
import { BlueSerifHeader2 } from '../Texts/Headers'

const AvailabilityHeader = () => {
  return (
    <View style={styles.container}>
      <BlueSerifHeader2 text="Availability"></BlueSerifHeader2>
    </View>
  )
}
const styles = StyleSheet.create({
  container: { paddingLeft: 25 }
})

export default AvailabilityHeader
