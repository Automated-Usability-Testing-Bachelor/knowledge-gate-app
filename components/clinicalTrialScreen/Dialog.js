import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'

const Dialog = ({ title, body }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.TitleText}>{title}</Text>
      </View>
      <View>
        <Text style={styles.BodyText}>{body}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.offWhite.color,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 15
  },
  TitleText: {
    fontFamily: 'Serif-SemiBold',
    color: Colors.black.color,
    fontSize: 14
  },
  BodyText: {
    fontFamily: 'Sans-Light',
    color: Colors.black.color,
    fontSize: 12
  }
})

export default Dialog
