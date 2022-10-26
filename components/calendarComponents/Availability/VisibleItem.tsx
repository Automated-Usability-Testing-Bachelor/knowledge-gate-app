import React, { useCallback } from 'react'
import {
  View,
  Animated,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native'
import Colors from '../../../constants/Colors'
import { Availability } from '../../../mocks/CalendarMockData'
import ClockIcon from './clockIcon'

const styles = StyleSheet.create({
  rowFront: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    margin: 5
  },
  rowFrontVisible: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    padding: 10
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.black.color
  }
})

export type Props = {
  onEditCallback: (id: string | number[]) => void
  data: Data
  rowHeightAnimatedValue: Animated.Value
  removeRow: () => void
  // eslint-disable-next-line react/no-unused-prop-types, @typescript-eslint/no-explicit-any
  leftActionState: any
  // eslint-disable-next-line react/no-unused-prop-types, @typescript-eslint/no-explicit-any
  rightActionState: any
}

export type Data = {
  index: number
  item: Availability
}

const VisibleItem: React.FC<Props> = (props) => {
  const {
    onEditCallback,
    data,
    rowHeightAnimatedValue,
    removeRow,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    rightActionState
  } = props

  if (rightActionState) {
    Animated.timing(rowHeightAnimatedValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false
    }).start(() => {
      removeRow()
    })
  }

  const onPress = useCallback(
    () => onEditCallback(data.item.id),
    [data.item.id, onEditCallback]
  )

  return (
    <Animated.View
      style={[
        styles.rowFront,
        {
          height: rowHeightAnimatedValue,
          justifyContent: 'center'
        }
      ]}
    >
      <TouchableHighlight
        style={[styles.rowFrontVisible, { justifyContent: 'center' }]}
        onPress={onPress}
        underlayColor={'#aaa'}
      >
        <View
          style={{
            justifyContent: 'center',
            flex: 1
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ClockIcon />
            <View>
              <Text style={styles.text}>{`${data.item.from.format(
                'hh:mm A'
              )} - ${data.item.to.format('hh:mm A')}`}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </Animated.View>
  )
}

export default VisibleItem
