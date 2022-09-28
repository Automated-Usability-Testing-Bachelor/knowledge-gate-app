import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Colors from "../../constants/Colors";

import AvailabilityItem from "./AvailabilityItem";
import { getAvailabilitiesFromDay } from "../../mocks/CalendarMockData";

import NoAvailability from "../NoDataComponents/NoAvailabilities";

const AvailabilitiesView = ({ currentDate }) => {
  const [currentAvailabilities, setCurrentAvailabilities] = useState([]);

  useEffect(() => {
    updateAvailabilityOnCurrentDate(currentDate);
  }, [currentDate]);

  const updateAvailabilityOnCurrentDate = (currentDate) => {
    let data = getAvailabilitiesFromDay(currentDate);
    if (data != undefined) {
      console.log("availabilities view");
      console.log(data.availabilities);
      setCurrentAvailabilities(data.availabilities);
    } else if (data === undefined || data.length == 0) {
      setCurrentAvailabilities([]);
    }
  };

  const onDeleteAvailability = (id, currentAvailabilities) => {
    //update availabilities
    let data = currentAvailabilities;
    if (
      data === undefined ||
      data.availabilities.length === 0 ||
      data.availabilities === undefined
    ) {
      setCurrentAvailabilities([]);
    } else {
      let newData = data.availabilities;
      let arr = [];

      setCurrentAvailabilities(newData);
    }
  };

  return (
    <View>
      <FlatList
        data={currentAvailabilities}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View style={styles.NoAvailabilityContainer}>
            <NoAvailability />
          </View>
        }
        renderItem={({ item }) => (
          <AvailabilityItem
            from={item.from}
            to={item.to}
            id={item.id}
            onDeleteCallback={onDeleteAvailability}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: Colors.offWhite.color,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 0,
  },
  NoAvailabilityContainer: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
});

export default AvailabilitiesView;
