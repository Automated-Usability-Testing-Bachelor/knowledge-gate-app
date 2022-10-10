import * as React from "react";
import {BanknotesIcon, BellIcon, CalendarIcon, ClockIcon, UserCircleIcon} from "react-native-heroicons/solid";
import {
    BanknotesIcon as BanknotesIconOutline,
    BellIcon as BellIconOutline,
    CalendarIcon as CalendarIconOutline,
    ClockIcon as ClockIconOutline,
    UserCircleIcon as UserCircleIconOutline
} from "react-native-heroicons/outline";

function Icons({focused, color, name}: { focused: boolean, color: string, name: string }) {
    switch (name) {
        case "Projects":
            return (
                <>
                    {focused
                        ? <ClockIcon height={22} width={22} color={color}/>
                        : <ClockIconOutline height={22} width={22} color={color}/>}
                </>
            )

        case ("Invoice"):
            return (
                <>
                    {focused
                        ? <BanknotesIcon height={22} width={22} color={color}/>
                        : <BanknotesIconOutline height={22} width={22} color={color}/>}
                </>
            )
        case ("Calendar"):
            return (
                <>
                    {focused
                        ? <CalendarIcon height={22} width={22} color={color}/>
                        : <CalendarIconOutline height={22} width={22} color={color}/>}
                </>
            )
        case ("Notifications"):
            return (
                <>
                    {focused
                        ? <BellIcon height={22} width={22} color={color}/>
                        : <BellIconOutline height={22} width={22} color={color}/>}
                </>
            )
        case ("Profile"):
            return (
                <>
                    {focused
                        ? <UserCircleIcon height={22} width={22} color={color}/>
                        : <UserCircleIconOutline height={22} width={22} color={color}/>}
                </>
            )
        default:
            console.log("Error: No Icon Found");
            return (
                <></>
            )
    }
}

export default Icons;