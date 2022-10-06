import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import Colors from "../../constants/Colors";

import AvailabilityItem from "./AvailabilityItem";
import {getAvailabilitiesFromDay} from "../../mocks/CalendarMockData";

import NoAvailability from "../NoDataComponents/NoAvailabilities";

const AvailabilitiesView = ({currentDate, onEditCallback, header, footer}) => {
    const [currentAvailabilities, setCurrentAvailabilities] = useState([]);

    useEffect(() => {
        updateAvailabilityOnCurrentDate(currentDate);
    }, [currentDate]);

    const updateAvailabilityOnCurrentDate = (currentDate) => {
        let data = getAvailabilitiesFromDay(currentDate);
        if (data != undefined) {
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
                ListHeaderComponent={header}
                ListFooterComponent={footer}
                data={currentAvailabilities}
                keyExtractor={(item) => item.id}
                initialNumToRender={1}
                ListEmptyComponent={
                    <View style={styles.NoAvailabilityContainer}>
                        <NoAvailability/>
                    </View>
                }
                renderItem={({item}) => (
                    <AvailabilityItem
                        from={item.from}
                        to={item.to}
                        id={item.id}
                        onDeleteCallback={onDeleteAvailability}
                        onEditCallback={onEditCallback}
                    />
                )}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    NoAvailabilityContainer: {
        paddingHorizontal: 25,
        paddingVertical: 10,
    },
});

export default AvailabilitiesView;
