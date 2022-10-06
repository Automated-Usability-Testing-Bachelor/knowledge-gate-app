import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";

function BackgroundCardsTemplate(props: any) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>{props.header}</View>
      <View style={styles.container2}>{props.body}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.warmGrey.color,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container2: {
    flex: 1,
    backgroundColor: Colors.offWhite.color,
    //backgroundColor: "green",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    //paddingBottom: 120,
  },
  headerContainer: {
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  header1: {
    fontSize: 20,
    color: Colors.black.color,
  },
  header2: {
    fontSize: 18,
    color: Colors.blue.color,
  },
});

export default BackgroundCardsTemplate;
