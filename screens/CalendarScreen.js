import BackgroundCards from "../components/BackgroundCardsTemplate";
import React, {useState} from "react";
import CalendarHeaderText from "../components/calendar/CalenderHeaderText";
import CalendarBody from "../components/calendar/CalendarBody";
import moment from "moment";

function CalendarScreen() {
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
}

export default CalendarScreen;
