import React, { useRef, useState } from 'react'
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/core'
import OnboardingView from '../components/onboarding/OnboardingView'
import Colors from '../constants/Colors'
import Arrow from '../components/onboarding/Arrow'
import KggButton from '../components/KggButton'

export const SLIDER_WIDTH = Dimensions.get('window').width + 30

export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)

const data = [
  {
    id: 1,
    headerText: 'Availability',
    secondHeaderText: 'Add your availability with our Calendar',
    icon: {
      source: require('../components/onboarding/Calendar.png'),
      width: 360,
      height: 210.64
    }
  },
  {
    id: 2,
    headerText: 'Projects',
    secondHeaderText: "View all the projects you've been invited to",
    icon: {
      source: require('../components/onboarding/illustration.png'),
      width: 360,
      height: 298.48
    }
  },
  {
    id: 3,
    headerText: 'Profile',
    secondHeaderText: 'View and edit your Expert Profile',
    icon: {
      source: require('../components/onboarding/Social_media.png'),
      width: 360,
      height: 205.33
    }
  },
  {
    id: 4,
    headerText: 'Invoice',
    secondHeaderText: 'Create an invoice through the app',
    icon: {
      source: require('../components/onboarding/Invoice_sent.png'),
      width: 360,
      height: 296.45
    }
  }
]

const renderItem = ({ item }) => {
  return (
    <OnboardingView
      headerText={item.headerText}
      secondHeaderText={item.secondHeaderText}
      icon={item.icon}
    />
  )
}

const OnboardCarouselScreen = () => {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1))
  const animation = Animated.sequence([
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true
    }),
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true
    })
  ])
  const animationFadeIn = Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 100,
    useNativeDriver: true
  })
  const animationFadeOut = Animated.timing(fadeAnim, {
    toValue: 0,
    duration: 50,
    useNativeDriver: true
  })

  const [index, setIndex] = useState(0)
  const isCarousel = useRef(null)
  const navigation = useNavigation()

  const onPressBack = () => {
    if (isCarousel != null) {
      isCarousel.current.snapToPrev()
    }
  }
  const onPressForward = () => {
    if (isCarousel != null) {
      isCarousel.current.snapToNext()
    }
  }
  const onPressGetStarted = () => {
    navigation.navigate('Root')
  }
  const onBeforeSnapToItem = (slideIndex) => {
    if (slideIndex === data.length - 1) {
      animationFadeOut.start()
    }
  }

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.inerContainer}>
        <View style={styles.skipContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Root')}
            style={styles.buttonSkip}
          >
            <Text style={styles.skipText}>{'Skip'}</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          ref={isCarousel}
          data={data}
          renderItem={renderItem}
          inactiveSlideOpacity={0}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index) => {
            setIndex(index)
            animationFadeIn.start()
          }}
          lockScrollWhileSnapping
          onBeforeSnapToItem={onBeforeSnapToItem}
        />

        <View style={styles.pagAndArrows}>
          <Arrow onPress={onPressBack} isRight={false} />
          <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: 15,
              height: 15,
              borderRadius: 10,
              marginHorizontal: 1,
              backgroundColor: Colors.blue.color
            }}
            tappableDots
            inactiveDotStyle={{
              backgroundColor: Colors.blue.color
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
          <Animated.View
            style={[
              {
                opacity: fadeAnim // Bind opacity to animated value
              }
            ]}
          >
            {index === data.length - 1 ? (
              <KggButton
                color="red"
                name="Finish"
                onPress={onPressGetStarted}
              />
            ) : (
              <Arrow onPress={onPressForward} isRight />
            )}
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flex: 1,
    paddingTop: 0,
    justifyContent: 'center'
  },
  inerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  carouselContainer: {},
  pagAndArrows: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  skipText: {
    fontFamily: 'Sans-Regular',
    fontSize: 18,
    color: Colors.red.color
  },
  buttonSkip: {
    padding: 10
  },
  skipContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
    paddingBottom: 5
  }
})

export default OnboardCarouselScreen
