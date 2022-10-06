import BackgroundCards from "../components/BackgroundCardsTemplate";
import CalendarHeaderText from "../components/calendar/CalenderHeaderText";
import CalendarBody from "../components/calendar/CalendarBody";
import React, {useState} from "react";
import moment from "moment/moment";

const CalendarScreen = ({}) => {
    const [currentDate, setCurrentDate] = useState(moment());
    const selectedDayCallback = (date) => {
        setCurrentDate(date);
    };
    return (
        <BackgroundCards
            header={CalendarHeaderText({date: currentDate})}
            body={CalendarBody({selectedDayHeaderCallback: selectedDayCallback})}
        />
    );
};

export default CalendarScreen;