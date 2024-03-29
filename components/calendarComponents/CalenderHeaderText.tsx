import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { BlackSansHeader2 } from '../Texts/Headers'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    height: 'auto'
  }
})

export type Props = {
  date: moment.Moment
}
const CalendarHeaderText: React.FC<Props> = ({ date }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0))
  const animationFadeIn = Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 50,
    useNativeDriver: true
  })
  useEffect(() => {
    animationFadeIn.reset()
    animationFadeIn.start()
  }, [animationFadeIn, date])

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: 1 // Bind opacity to animated value
        }
      ]}
    >
      <BlackSansHeader2 text={date.format('dddd, MMMM Do')} />
    </Animated.View>
  )
}

export default CalendarHeaderText
