import React, { PropsWithChildren, useEffect, useRef } from 'react'
import { Animated, StyleProp, ViewStyle } from 'react-native'

type FadeInViewProps = {
  duration?: number
  style?: Animated.AnimatedProps<StyleProp<ViewStyle>>
}

const FadeInView: React.FC<PropsWithChildren<FadeInViewProps>> = ({
  duration,
  style,
  children,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      useNativeDriver: true
    }).start()
  }, [fadeAnim, duration])

  return (
    <Animated.View // Special animatable View
      style={{
        ...style,
        opacity: fadeAnim // Bind opacity to animated value
      }}
    >
      {children}
    </Animated.View>
  )
}

export default FadeInView

// You can then use your `FadeInView` in place of a `View` in your components:
