import React from 'react'
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Colors from '../constants/Colors'

export type Props = {
  name: string
  icon?: ImageSourcePropType | undefined
  onPress: () => void
  color: string
  paddingHorizontal?: number
  width?: number
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  button: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center'
  },
  touchable: { borderRadius: 10 },
  text: {
    color: '#FFF',
    lineHeight: 18
  }
})

const KggButton: React.FC<Props> = ({
  name,
  icon,
  onPress,
  color,
  paddingHorizontal,
  width
}) => {
  const determineBackColor = () => {
    switch (color) {
      case 'red': {
        return Colors.red.color
      }
      case 'black': {
        return Colors.black.color
      }
      case 'blue': {
        return Colors.blue.color
      }
      case 'warmGrey': {
        return Colors.warmGrey.color
      }
      case 'offWhite': {
        return Colors.offWhite.color
      }
      case 'white': {
        return '#FFFFFF'
      }
      default: {
        return '#FFFFFF'
      }
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.touchable,
          {
            backgroundColor: determineBackColor(),
            paddingHorizontal: paddingHorizontal || 20,
            width: width || 'auto'
          }
        ]}
        activeOpacity={0.6}
      >
        <View style={styles.button}>
          <>
            {icon || <View />}
            <Text style={styles.text}>{name}</Text>
          </>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default KggButton
