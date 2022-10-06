import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
const StatusBadge = ({ status }) => {
  const [currentStyle, setCurrentStyle] = useState({
    name: "Unknown",
    backgroundColor: "rgba(221, 38, 56, 0.2)",
    textColor: Colors.red.color,
  });
  useEffect(() => {
    determineStyle(status);
  }, []);
  const determineStyle = (status) => {
    switch (status) {
      case "complete":
        setCurrentStyle({
          name: "Complete",
          backgroundColor: "rgba(60, 180, 65, 0.2)",
          textColor: "#3CB441",
        });
        break;
      case "active not recruiting":
        setCurrentStyle({
          name: "Active not recruiting",
          backgroundColor: "rgba(60, 180, 65, 0.2)",
          textColor: "#3CB441",
        });
        break;
      default:
        break;
    }
  };
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentStyle.backgroundColor },
      ]}
    >
      <Text style={[styles.text, { color: currentStyle.textColor }]}>
        {currentStyle.name}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "auto",
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  text: {
    fontFamily: "Sans-Medium",
    fontSize: 10,
  },
});
export default StatusBadge;
