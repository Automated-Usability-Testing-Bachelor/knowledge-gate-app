import React from 'react'
import { StyleSheet, View } from 'react-native'
import { BlueSerifHeader2 } from '../../Texts/Headers'

const styles = StyleSheet.create({
  container: { paddingLeft: 25 }
})

const AvailabilityHeader = () => {
  return (
    <View style={styles.container}>
      <BlueSerifHeader2 text={'Availability'} />
    </View>
  )
}

export default AvailabilityHeader
