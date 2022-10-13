import React from 'react';
import { View, Animated, TouchableHighlight, Text, StyleSheet } from 'react-native'
import Colors from '../../../constants/Colors';
import { Availability } from '../../../mocks/CalendarMockData';
import ClockIcon from './clockIcon';

const styles = StyleSheet.create({
    rowFront: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        height: 60,
        margin: 5,
      },
      rowFrontVisible: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        height: 60,
        padding: 10,
      },
      text: {
        fontSize: 14,
        lineHeight: 22,
        color: Colors.black.color,
      },
})

export type Props = {
  onEditCallback: (id: string) => void
  data: Data
  rowHeightAnimatedValue: Animated.Value
  removeRow: () => void
  leftActionState: any
  rightActionState: any
}
export type Data = {
  index: number
  item: Availability
  separators: {
    highlight: Function
    unhighlight: Function
    updateProps: Function
  }
}


const VisibleItem: React.FC<Props> = (props) => {
    const {
      onEditCallback,
      data,
      rowHeightAnimatedValue,
      removeRow,
      leftActionState,
      rightActionState,
    } = props;
    if (rightActionState) {
      Animated.timing(rowHeightAnimatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        removeRow();
      });
    }

    return (
      <Animated.View
        style={[
          styles.rowFront,
          {
            height: rowHeightAnimatedValue,
            justifyContent: "center",
          },
        ]}
      >
        <TouchableHighlight
          style={[styles.rowFrontVisible, { justifyContent: "center" }]}
          onPress={() => onEditCallback(data.item.id)}
          underlayColor={"#aaa"}
        >
          <View
            style={{
              justifyContent: "center",
              flex: 1,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <ClockIcon />
              <View>
                <Text style={styles.text}>{`${data.item.from.format(
                  "hh:mm A"
                )} - ${data.item.to.format("hh:mm A")}`}</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </Animated.View>
    );
  };

  export default VisibleItem;