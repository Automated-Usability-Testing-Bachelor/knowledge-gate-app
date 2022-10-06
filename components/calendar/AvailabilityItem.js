import React, { useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import Colors from "../../constants/Colors";
import ClockIcon from "./clockIcon";
import ThreeDotsIcon from "../ThreeDotsIcon";
import { deleteAvailability } from "../../mocks/CalendarMockData";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import { Swipeable, TouchableOpacity } from "react-native-gesture-handler";

const AvailabilityItem = ({
  from,
  to,
  id,
  onDeleteCallback,
  onEditCallback,
}) => {
  const [popupVisible, setPopUpVisible] = useState(false);
  const onThreeDotsPress = () => {
    setPopUpVisible(!popupVisible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.clockText}>
          <ClockIcon />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{`${from.format("hh:mm A")} - ${to.format(
              "hh:mm A"
            )}`}</Text>
          </View>
        </View>
        <View>
          <Menu>
            <MenuTrigger children={<ThreeDotsIcon />} />
            <MenuOptions
              customStyles={optionsStyles}
              style={styles.MenuOptions}
            >
              <MenuOption
                style={styles.MenuOption}
                onSelect={() => {
                  onEditCallback(id);
                }}
              >
                <Text
                  style={{
                    color: Colors.black.color,
                    fontFamily: "Sans-Regular",
                    fontSize: 14,
                  }}
                >
                  Edit
                </Text>
              </MenuOption>
              <MenuOption
                onSelect={() => {
                  let currentAvailabilities = deleteAvailability(id);
                  onDeleteCallback(id, currentAvailabilities);
                }}
              >
                <Text
                  style={{
                    color: Colors.red.color,
                    fontFamily: "Sans-Regular",
                    fontSize: 14,
                  }}
                >
                  Delete
                </Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { paddingHorizontal: 25, marginVertical: 10 },
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
  popUp: {
    position: "absolute",
    right: 0,
    top: 40,
    backgroundColor: "#FFFFFF",

    overflow: "visible",
  },
  MenuOptions: {
    flex: 1,
    padding: 0,
    alignItems: "center",
    //backgroundColor: "lightgreen",
  },
  MenuOption: {},
});

const optionsStyles = {
  optionsContainer: {
    padding: 10,
    borderRadius: 5,
    shadowColor: "#rgba(0, 0, 0, 1)",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 100,
    elevation: 20,
    padding: 5,
    width: "auto",
  },
  optionsWrapper: {
    padding: 0,
  },
  optionWrapper: {
    margin: 5,
  },
  optionTouchable: {
    activeOpacity: 70,
  },
  optionText: {},
};

export default AvailabilityItem;
