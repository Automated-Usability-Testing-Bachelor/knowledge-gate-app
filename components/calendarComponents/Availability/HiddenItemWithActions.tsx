import React from 'react'
import { Animated, TouchableOpacity, Text, StyleSheet } from 'react-native'
// eslint-disable-next-line import/no-extraneous-dependencies
import { AntDesign, Feather } from '@expo/vector-icons'
import Colors from '../../../constants/Colors'

const styles = StyleSheet.create({
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    borderRadius: 5
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingRight: 17
  },
  backRightBtnLeft: {
    backgroundColor: Colors.blue.color,
    right: 75
  },
  backRightBtnRight: {
    backgroundColor: Colors.red.color,
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  trash: {
    height: 25,
    width: 25,
    marginRight: 7
  }
})

export type Props = {
  swipeAnimatedValue: Animated.Value
  rowActionAnimatedValue: Animated.Value
  rowHeightAnimatedValue: Animated.Value
  leftActionActivated: boolean
  rightActionActivated: boolean
  onEdit: () => void
  onDelete: () => void
}

const HiddenItemWithActions: React.FC<Props> = (props) => {
  const {
    swipeAnimatedValue,
    leftActionActivated,
    rightActionActivated,
    rowActionAnimatedValue,
    rowHeightAnimatedValue,
    onEdit,
    onDelete
  } = props

  if (rightActionActivated) {
    Animated.spring(rowActionAnimatedValue, {
      toValue: 500,
      useNativeDriver: false
    }).start()
  } else {
    Animated.spring(rowActionAnimatedValue, {
      toValue: 75,
      useNativeDriver: false
    }).start()
  }

  return (
    <Animated.View style={[styles.rowBack, { height: rowHeightAnimatedValue }]}>
      <Text>{'Left'}</Text>
      {!leftActionActivated && (
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={onEdit}
        >
          <Feather name={'edit'} size={24} color={'white'} />
        </TouchableOpacity>
      )}
      {!leftActionActivated && (
        <Animated.View
          style={[
            styles.backRightBtn,
            styles.backRightBtnRight,
            {
              flex: 1,
              width: rowActionAnimatedValue
            }
          ]}
        >
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={onDelete}
          >
            <Animated.View
              style={[
                styles.trash,
                {
                  transform: [
                    {
                      scale: swipeAnimatedValue.interpolate({
                        inputRange: [-90, -45],
                        outputRange: [1, 0],
                        extrapolate: 'clamp'
                      })
                    }
                  ]
                }
              ]}
            >
              <AntDesign name={'delete'} size={24} color={'white'} />
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      )}
    </Animated.View>
  )
}

export default HiddenItemWithActions
