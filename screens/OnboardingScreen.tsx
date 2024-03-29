/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import FadeInView from '../components/animatedComponents/FadeInView'
import KggButton from '../components/KggButton'

import OnboardingView from '../components/onboarding/OnboardingView'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flex: 1,
    paddingTop: 0,
    justifyContent: 'space-evenly'
    // justifyContent: "center",
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 60,
    marginTop: 30
  }
})

const OnboardingScreen = () => {
  const headerText = 'Welcome to our Expert Application'
  const appDevImageSource = require('../components/onboarding/app_development.png')
  const navigation = useNavigation()
  const onPressSkip = () => {
    navigation.navigate('Root')
  }
  const onPressGetStarted = () => {
    navigation.navigate('Carousel')
  }
  const icon = { source: appDevImageSource, height: 260, width: 326 }

  return (
    <SafeAreaView style={styles.container}>
      <OnboardingView headerText={headerText} icon={icon} />
      <FadeInView duration={3000}>
        <View style={styles.buttonsContainer}>
          <KggButton
            color={'blue'}
            name={'Skip'}
            // eslint-disable-next-line react/jsx-no-bind
            onPress={() => {
              onPressSkip()
            }}
            width={150}
          />
          <KggButton
            color={'red'}
            name={'Get Started'}
            // eslint-disable-next-line react/jsx-no-bind
            onPress={onPressGetStarted}
            width={150}
          />
        </View>
      </FadeInView>
    </SafeAreaView>
  )
}

export default OnboardingScreen
