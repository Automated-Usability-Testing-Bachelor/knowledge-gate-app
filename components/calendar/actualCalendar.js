import React, {useEffect, useRef, useState} from "react";
import {Animated, Image, StyleSheet, View} from "react-native";
import Colors from "../../constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import {textStyles} from "../Texts/Headers";
import FadeInView from "../animatedComponents/FadeInView";

const ActualCalendar = ({
                            datesWithAvailabilities,
                            selectedDayCallback,
                            currentMonthCallback,
                        }) => {
    const icon = require("./kBlue.png");
    const arrowLeft = require("./ArrowLeftOutline.png");
    const arrowRight = require("./ArrowRightOutline.png");
    const [currentSelectedDate, setCurrentSelectedDate] = useState(moment());
    const [customDatesStyles, setCustomDatesStyles] = useState([]);
    const [selectedMonthYear, setSelectedMonthYear] = useState(
        moment().startOf("month")
    );

    const expandCircle = useRef(new Animated.Value(0)).current; // Initial value

    const dateContainsAvailability = (day, arr) => {
        let dayHasAvailability = false;
        datesWithAvailabilities.forEach((element) => {
            let avDate = element.date.clone();
            avDate = avDate.startOf("day");
            if (
                day.startOf("day").isSame(avDate, "day") &&
                element.availabilities.length > 0
            ) {
                arr.push({
                    date: day.clone(),
                    style: {
                        backgroundColor: Colors.blue.color,
                    },
                    textStyle: {
                        color: "#FFFFFF",
                    }, // sets the font color
                    containerStyle: [], // extra styling for day container
                    allowDisabled: true, // allow custom style to apply to disabled dates
                });
                dayHasAvailability = true;
            }
        });
        if (!dayHasAvailability) {
            arr.push({
                date: day.clone(),
                style: {},
                textStyle: {}, // sets the font color
                containerStyle: [], // extra styling for day container
                allowDisabled: true, // allow custom style to apply to disabled dates
            });
        }
    };
    useEffect(() => {
    }, [selectedMonthYear]);
    useEffect(() => {
        let tempMonth = selectedMonthYear.clone();

        changeCustomDatesStyle(tempMonth);
    }, [datesWithAvailabilities]);

    const changeCustomDatesStyle = (date) => {
        let startOfMonth = date.clone();
        let day = date;
        let styles = [];
        while (day.add(1, "day").isSame(startOfMonth, "month")) {
            dateContainsAvailability(day.clone(), styles);
        }
        setCustomDatesStyles(styles);
    };

    const customDayHeaderStyles = ({dayOfWeek, month, year}) => {
        return {
            textStyle: {
                color: textStyles.blackSerifHeader4.color,
                fontFamily: textStyles.blackSerifHeader4.fontFamily,
                fontSize: textStyles.blackSerifHeader4.fontSize,
            },
        };
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={icon}></Image>
            </View>
            <FadeInView duration={1000}>
                <CalendarPicker
                    startFromMonday={true}
                    previousComponent={
                        <Image style={styles.leftArrow} source={arrowLeft}/>
                    }
                    nextComponent={<Image style={styles.leftArrow} source={arrowRight}/>}
                    dayLabelsWrapper={styles.dayLabel}
                    monthTitleStyle={styles.month}
                    yearTitleStyle={styles.year}
                    //scrollable={true}
                    selectMonthTitle="Select a Month in "
                    headerWrapperStyle={styles.header}
                    todayBackgroundColor={"rgba(221, 38, 56, 0.5)"}
                    todayTextStyle={styles.TodayText}
                    selectedDayColor={Colors.red.color}
                    selectedDayTextStyle={styles.selectedText}
                    selectedDayStyle={{
                        backgroundColor: Colors.red.color,
                        transform: [{scale: 1}],
                    }}
                    showDayStragglers={true}
                    headingLevel={3}
                    customDayHeaderStyles={customDayHeaderStyles}
                    onDateChange={(date) => {
                        selectedDayCallback(date);
                    }}
                    customDatesStyles={customDatesStyles}
                    onMonthChange={(currentMonthYear) => {
                        setSelectedMonthYear(currentMonthYear);
                        changeCustomDatesStyle(selectedMonthYear);
                        currentMonthCallback(currentMonthYear);
                    }}
                    selectedStartDate={currentSelectedDate}
                    textStyle={{fontFamily: textStyles.blackSerifBody1.fontFamily}}
                    minDate={moment().startOf("year")}
                />
            </FadeInView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {paddingVertical: 20},
    leftArrow: {
        height: 18,
        width: 18,
        color: Colors.red.color,
    },
    dayLabel: {borderTopWidth: 0, borderBottomWidth: 0},
    month: {
        color: Colors.red.color,
        fontSize: 18,
        fontFamily: "Serif-Bold",
    },
    year: {
        color: Colors.red.color,
        fontSize: 18,
        fontFamily: "Sans-Regular",
    },
    header: {
        color: Colors.red.color,
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    TodayText: {
        color: "#FFFFFF",
    },
    selectedText: {
        color: "#FFF",
    },
    logoContainer: {
        paddingTop: 97,
        flexDirection: "row",
        alignSelf: "center",
        position: "absolute",
        opacity: 0.1,
    },
    logo: {
        width: 219.81,
        height: 205,
    },
});

export default ActualCalendar;
