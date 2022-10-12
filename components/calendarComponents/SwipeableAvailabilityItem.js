import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

import { SwipeListView } from "react-native-swipe-list-view";
import Colors from "../../constants/Colors";
import ClockIcon from "./clockIcon";
import moment from "moment";
import uuid from "react-native-uuid";

import Notifications from "./Notifications";
import {
  deleteAvailability,
  getAvailabilitiesFromDay,
} from "../../mocks/CalendarMockData";

const NotificationScreen = ({ currentDate, onEditCallback }) => {
  const [availabilities, setAvailabilities] = useState([]);
  useEffect(() => {
    let data = getAvailabilitiesFromDay(currentDate);
    if (data) {
      data.availabilities.map((item, index) => ({
        key: `${item.id}`,
        from: item.title,
        to: item.details,
      })),
        setAvailabilities(data.availabilities);
    } else {
      setAvailabilities([]);
    }
  }, [currentDate]);
  const closeRow = (rowMap, rowKey) => {
    console.log(rowKey);
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  const editRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    onEditCallback(rowKey);
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...availabilities];
    const prevIndex = availabilities.findIndex((item) => item.id === rowKey);
    newData.splice(prevIndex, 1);
    setAvailabilities(newData);
    deleteAvailability(rowKey);
  };
  const onRowDidOpen = (index) => {
    console.log("This row opened", index);
  };

  const onLeftActionStatusChange = (rowKey) => {
    console.log("onLeftActionStatusChange", rowKey);
  };

  const onRightActionStatusChange = (rowKey) => {
    console.log("onRightActionStatusChange", rowKey);
  };

  const onRightAction = (rowKey) => {
    console.log("onRightAction", rowKey);
  };

  const onLeftAction = (rowKey) => {
    console.log("onLeftAction", rowKey);
  };

  const VisibleItem = (props) => {
    const {
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
          onPress={() => console.log("Element touched")}
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

  const renderItem = (data, rowMap) => {
    const rowHeightAnimatedValue = new Animated.Value(60);
    console.log("render");
    console.log(data);
    return (
      <VisibleItem
        data={data}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        removeRow={() => {
          deleteRow(rowMap, data.item.id);
        }}
      />
    );
  };

  const HiddenItemWithActions = (props) => {
    const {
      swipeAnimatedValue,
      leftActionActivated,
      rightActionActivated,
      rowActionAnimatedValue,
      rowHeightAnimatedValue,
      onEdit,
      onDelete,
    } = props;

    if (rightActionActivated) {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 75,
        useNativeDriver: false,
      }).start();
    }

    return (
      <Animated.View
        style={[styles.rowBack, { height: rowHeightAnimatedValue }]}
      >
        <Text>Left</Text>
        {!leftActionActivated && (
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnLeft]}
            onPress={onEdit}
          >
            <Feather name="edit" size={24} color="white" />
          </TouchableOpacity>
        )}
        {!leftActionActivated && (
          <Animated.View
            style={[
              styles.backRightBtn,
              styles.backRightBtnRight,
              {
                flex: 1,
                width: rowActionAnimatedValue,
              },
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
                          extrapolate: "clamp",
                        }),
                      },
                    ],
                  },
                ]}
              >
                <AntDesign name="delete" size={24} color="white" />
              </Animated.View>
            </TouchableOpacity>
          </Animated.View>
        )}
      </Animated.View>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    const rowActionAnimatedValue = new Animated.Value(75);
    const rowHeightAnimatedValue = new Animated.Value(60);

    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        rowActionAnimatedValue={rowActionAnimatedValue}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        onEdit={() => editRow(rowMap, data.item.id)}
        onDelete={() => {
          deleteRow(rowMap, data.item.id);
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SwipeListView
        useFlatList
        data={availabilities}
        keyExtractor={(rowData, index) => {
          return rowData.id.toString();
        }}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        disableRightSwipe
        onRowDidOpen={onRowDidOpen}
        leftActivationValue={100}
        rightActivationValue={-200}
        leftActionValue={0}
        rightActionValue={-500}
        onLeftAction={onLeftAction}
        onRightAction={onRightAction}
        onLeftActionStatusChange={onLeftActionStatusChange}
        onRightActionStatusChange={onRightActionStatusChange}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backTextWhite: {
    color: "#FFF",
  },
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
  rowBack: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    //paddingLeft: 15,
    margin: 10,
    borderRadius: 5,
  },
  backRightBtn: {
    alignItems: "flex-end",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: Colors.blue.color,
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: Colors.red.color,
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trash: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#666",
  },
  details: {
    fontSize: 12,
    color: "#999",
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    overflow: "visible",
  },
  clockText: {
    flexDirection: "row",
  },
  textContainer: {
    alignItems: "center",
    height: 24,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.black.color,
  },
});
