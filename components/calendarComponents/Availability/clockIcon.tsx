import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ClockIcon } from 'react-native-heroicons/outline'
import Colors from '../../../constants/Colors'

const styles = StyleSheet.create({
  container: { paddingRight: 5 }
})

const ClockIconComponent = () => {
  return (
    <View style={styles.container}>
      <ClockIcon size={24} color={Colors.darkGrey.color} />
    </View>
  )
}

export default ClockIconComponent
