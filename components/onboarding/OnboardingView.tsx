import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from './Header'
import FadeInView from '../animatedComponents/FadeInView'
import OnboardingImage, { IconObject } from './OnboardingImage'
import SecondHeader from './SecondHeader'

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    alignItems: 'center',
    paddingTop: 60
  },
  headerContainer: {}
})

export type Props = {
  icon: IconObject
  headerText: string
  secondHeaderText?: string
}

const OnboardingView: React.FC<Props> = ({
  icon,
  headerText,
  secondHeaderText
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header text={headerText} />
        <SecondHeader text={secondHeaderText} />
      </View>
      <View style={styles.imageContainer}>
        <FadeInView duration={2500}>
          <OnboardingImage
            source={icon.source}
            height={icon.height}
            width={icon.width}
          />
        </FadeInView>
      </View>
    </View>
  )
}

export default OnboardingView
