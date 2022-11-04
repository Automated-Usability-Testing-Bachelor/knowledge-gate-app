import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: Colors.red.color,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center'
  },
  touchable: {
    borderRadius: 10,
    alignSelf: 'center',
    padding: 12
  },
  text: {
    color: '#FFF',
    lineHeight: 18,
    paddingHorizontal: 5
  }
})

export type Props = {
  name: string
  icon?: React.ReactElement
  onPress(): void
  testID?: string
}

const RedButton: React.FC<Props> = ({ name, icon, onPress, testID }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.touchable}
        activeOpacity={0.6}
        testID={testID}
      >
        <View style={styles.button}>
          <Text style={styles.text}>{name}</Text>
          {icon || <View />}
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default RedButton
