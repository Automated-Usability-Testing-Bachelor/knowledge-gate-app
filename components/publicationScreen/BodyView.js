import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Colors from "../../constants/Colors";
import LinkOriginalButton from "./LinkOriginalButton";

const BodyView = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.DateContainer}>
        <View>
          <Text style={styles.publishDateText}>{item.publishDate}</Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.TitleText}>{item.title}</Text>
        </View>
        <ScrollView>
          <Text style={styles.BodyText}>{item.body}</Text>
        </ScrollView>
      </View>
      <View style={styles.btnContainer}>
        <LinkOriginalButton link={item.link} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    flex: 1,
    justifyContent: "flex-start",
  },
  publishDateText: {
    fontFamily: "Sans-Medium",
    color: Colors.darkGrey.color,
    fontSize: 10,
  },
  DateContainer: {
    marginBottom: 10,
  },
  TitleText: {
    fontFamily: "Serif-SemiBold",
    fontSize: 14,
    color: Colors.black.color,
  },
  BodyText: {
    fontFamily: "Sans-Light",
    fontSize: 12,
    color: Colors.black.color,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
export default BodyView;
