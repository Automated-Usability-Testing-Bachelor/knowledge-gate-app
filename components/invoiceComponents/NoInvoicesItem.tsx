import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 10
  },
  text: {
    fontSize: 14,
    fontFamily: 'Sans-Regular',
    color: Colors.black.color
  }
})

const NoInvoicesItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'You have currently no invoices'}</Text>
    </View>
  )
}

export default NoInvoicesItem
