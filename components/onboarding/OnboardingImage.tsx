import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native'

export type IconObject = {
  source: ImageSourcePropType | undefined
  height: number
  width: number
}
const OnboardingImage: React.FC<IconObject> = ({ height, width, source }) => {
  return (
    <View style={styles.container}>
      <Image
        // resizeMode="center"
        style={{
          height,
          width
        }}
        source={source}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {},

  logo: {}
})

export default OnboardingImage
