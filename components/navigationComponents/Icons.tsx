import * as React from 'react'
import {
  BanknotesIcon,
  BellIcon,
  CalendarIcon,
  ClockIcon,
  UserCircleIcon
} from 'react-native-heroicons/solid'
import {
  BanknotesIcon as BanknotesIconOutline,
  BellIcon as BellIconOutline,
  CalendarIcon as CalendarIconOutline,
  ClockIcon as ClockIconOutline,
  UserCircleIcon as UserCircleIconOutline
} from 'react-native-heroicons/outline'

const size = 28.8

const Icons = ({
  focused,
  color,
  name
}: {
  focused: boolean
  color: string
  name: string
}) => {
  switch (name) {
    case 'Projects':
      return (
        <>
          {focused ? (
            <ClockIcon height={size} width={size} color={color} />
          ) : (
            <ClockIconOutline height={size} width={size} color={color} />
          )}
        </>
      )

    case 'Invoice':
      return (
        <>
          {focused ? (
            <BanknotesIcon height={size} width={size} color={color} />
          ) : (
            <BanknotesIconOutline height={size} width={size} color={color} />
          )}
        </>
      )
    case 'Calendar':
      return (
        <>
          {focused ? (
            <CalendarIcon height={size} width={size} color={color} />
          ) : (
            <CalendarIconOutline height={size} width={size} color={color} />
          )}
        </>
      )
    case 'Notifications':
      return (
        <>
          {focused ? (
            <BellIcon height={size} width={size} color={color} />
          ) : (
            <BellIconOutline height={size} width={size} color={color} />
          )}
        </>
      )
    case 'Profile':
      return (
        <>
          {focused ? (
            <UserCircleIcon height={size} width={size} color={color} />
          ) : (
            <UserCircleIconOutline height={size} width={size} color={color} />
          )}
        </>
      )
    default:
      console.log('Error: No Icon Found')

      return <></>
  }
}

export default Icons
