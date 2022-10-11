import React from 'react'
import { View } from 'react-native'
import { BlackSansBody1 } from '../Texts/Headers'

const NoAvailability = ({ text }) => {
  return (
    <View>
      <BlackSansBody1
        text={'You have yet to scedule any availability this date.'}
      />
    </View>
  )
}

export default NoAvailability
