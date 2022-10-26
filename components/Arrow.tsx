import React from 'react'
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'
import { ArrowLeftIcon, ArrowRightIcon } from 'react-native-heroicons/solid'
import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    alignSelf: 'center',
    width: 'auto',
    borderColor: 'rgba(0,27,114, 0.5)',
    borderStyle: 'solid',
    borderWidth: 0.5
  },
  touchable: {
    padding: 15,
    borderRadius: 10
  },
  text: {
    color: '#FFF',
    lineHeight: 18
  }
})

type ArrowProps = {
  onPress: (event: GestureResponderEvent) => void
  backgroundColor: string
  isRight: boolean // true if right arrow, false if left arrow
}

const Arrow: React.FC<ArrowProps> = ({ onPress, backgroundColor, isRight }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.touchable]}
        activeOpacity={0.6}
      >
        <View
          style={[
            styles.button,
            {
              backgroundColor
            }
          ]}
        >
          {isRight ? (
            <ArrowRightIcon size={24} fill={Colors.red.color} />
          ) : (
            <ArrowLeftIcon size={24} fill={Colors.red.color} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Arrow
