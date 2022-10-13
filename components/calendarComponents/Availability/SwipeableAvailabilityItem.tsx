import React, { useState, useEffect } from "react";
import {
  View,
  
  StyleSheet,
  Animated,
  
} from "react-native";

import { SwipeListView } from "react-native-swipe-list-view";

import {
  deleteAvailability,
  getAvailabilitiesFromDay, Availability
} from "../../../mocks/CalendarMockData";
import VisibleItem, { Data } from "./VisibleItem";
import HiddenItemWithActions from "./HiddenItemWithActions";







const SwipeableAvilabilityItem = ({ currentDate, onEditCallback }) => {
  const [availabilities, setAvailabilities] = useState<Availability[]>([]);
  useEffect(() => {
    let data = getAvailabilitiesFromDay(currentDate);
    if (data) {
      data.availabilities.map((item, index) => ({
        key: `${item.id}`,
        from: item.from,
        to: item.to,
      })),
        setAvailabilities(data.availabilities);
    } else {
      setAvailabilities([]);
    }
  }, [currentDate]);
  const closeRow = (rowMap, rowKey: string) => {
    console.log(rowKey);
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  const editRow = (rowMap, rowKey: string) => {
    closeRow(rowMap, rowKey);
    onEditCallback(rowKey);
  };

  const deleteRow = (rowMap, rowKey: string) => {
    closeRow(rowMap, rowKey);
    const newData = [...availabilities];
    const prevIndex = availabilities.findIndex((item) => item.id === rowKey);
    newData.splice(prevIndex, 1);
    setAvailabilities(newData);
    deleteAvailability(rowKey);
  };
  const onRowDidOpen = (index: number) => {
    console.log("This row opened", index);
  };

  const onLeftActionStatusChange = (rowKey: string) => {
    console.log("onLeftActionStatusChange", rowKey);
  };

  const onRightActionStatusChange = (rowKey: string) => {
    console.log("onRightActionStatusChange", rowKey);
  };

  const onRightAction = (rowKey: string) => {
    console.log("onRightAction", rowKey);
  };

  const onLeftAction = (rowKey: string) => {
    console.log("onLeftAction", rowKey);
  };

  const renderItem = (data: Data, rowMap: any) => {
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

  const renderHiddenItem = (data: any, rowMap) => {
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
        swipeToOpenPercent={10}
        swipeToClosePercent={10}
        closeOnScroll={false}
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
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onLeftAction={onLeftAction}
        onRightAction={onRightAction}
        onLeftActionStatusChange={onLeftActionStatusChange}
        onRightActionStatusChange={onRightActionStatusChange}
      />
    </View>
  );
};

export default SwipeableAvilabilityItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backTextWhite: {
    color: "#FFF",
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
});