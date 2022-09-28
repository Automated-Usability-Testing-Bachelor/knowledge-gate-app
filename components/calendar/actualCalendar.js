import React, {useEffect, useState} from "react";
import {Image, StyleSheet, View} from "react-native";
import Colors from "../../constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import {textStyles} from "../Texts/Headers";

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

    const dateContainsAvailability = (day, arr) => {
        datesWithAvailabilities.forEach((element) => {
            if (day.startOf("day").isSame(element.date.startOf("day"), "day")) {
                arr.push({
                    date: day.clone(),
                    style: {
                        backgroundColor: Colors.blue.color,
                    },
                    textStyle: {
                        color: "#FFFFFF",
                        fontSize: textStyles.blackSerifBody1.fontSize,
                        fontFamily: textStyles.blackSerifBody1.fontFamily,
                    }, // sets the font color
                    containerStyle: [], // extra styling for day container
                    allowDisabled: true, // allow custom style to apply to disabled dates
                });
            }
        });
        return arr;
    };
    useEffect(() => {
        changeCustomDatesStyle(selectedMonthYear);
    }, [selectedMonthYear]);

    const changeCustomDatesStyle = (date) => {
        let startOfMonth = date.clone();
        let day = date;
        let styles = [];
        while (day.add(1, "day").isSame(startOfMonth, "month")) {
            styles = dateContainsAvailability(day.clone(), styles);
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

            <CalendarPicker
                startFromMonday={true}
                previousComponent={
                    <Image style={styles.leftArrow} source={arrowLeft}/>
                }
                nextComponent={<Image style={styles.leftArrow} source={arrowRight}/>}
                dayLabelsWrapper={styles.dayLabel}
                monthTitleStyle={styles.month}
                yearTitleStyle={styles.year}
                selectMonthTitle="Select a Month in "
                headerWrapperStyle={styles.header}
                todayBackgroundColor={"rgba(0, 27, 114, 0.5)"}
                todayTextStyle={styles.TodayText}
                selectedDayColor={Colors.red.color}
                selectedDayTextStyle={styles.selectedText}
                showDayStragglers={true}
                headingLevel={3}
                customDayHeaderStyles={customDayHeaderStyles}
                onDateChange={selectedDayCallback}
                customDatesStyles={customDatesStyles}
                onMonthChange={(currentMonthYear) => {
                    setSelectedMonthYear(currentMonthYear);
                    console.log(currentMonthYear.month());
                    currentMonthCallback(currentMonthYear);
                }}
                selectedStartDate={currentSelectedDate}
                textStyle={{fontFamily: textStyles.blackSerifBody1.fontFamily}}
            />
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
