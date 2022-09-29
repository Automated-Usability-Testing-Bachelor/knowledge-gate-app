import React, { useState, useRef } from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel, { Pagination } from "react-native-snap-carousel";
import OnboardingView from "../components/onboarding/OnboardingView";

export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    headerText: "React JS",
    secondHeaderText: "React JS",
    icon: require("../components/onboarding/app_development.png"),
  },
  {
    id: 2,
    headerText: "React JS",
    secondHeaderText: "React JS",
    icon: require("../components/onboarding/app_development.png"),
  },
  {
    id: 3,
    headerText: "React JS",
    secondHeaderText: "React JS",
    icon: require("../components/onboarding/app_development.png"),
  },
];

const renderItem = ({ item }) => {
  return (
    <OnboardingView
      headerText={item.headerText}
      secondHeaderText={item.secondHeaderText}
      icon={item.icon}
    />
  );
};

const OnboardCarouselScreen = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.CarouselContainer}>
        <Carousel
          ref={isCarousel}
          data={data}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index) => setIndex(index)}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: "#F4BB41",
          }}
          tappableDots={true}
          inactiveDotStyle={{
            backgroundColor: "black",
            // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flex: 1,
    paddingTop: 0,
    justifyContent: "space-evenly",
  },
  CarouselContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnboardCarouselScreen;
