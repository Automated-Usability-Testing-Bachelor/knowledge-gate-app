import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from './Header'
import FadeInView from '../animatedComponents/FadeInView'
import OnboardingSVG, { IconObject } from './OnboardingSVG'
import SecondHeader from './SecondHeader'

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    alignItems: 'center',
    paddingVertical: 60
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
          <OnboardingSVG
            name={icon.name}
            height={icon.height}
            width={icon.width}
          />
        </FadeInView>
      </View>
    </View>
  )
}

export default OnboardingView
