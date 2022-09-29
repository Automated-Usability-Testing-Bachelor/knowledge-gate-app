import { StyleSheet, View } from "react-native";
import Header from "./Header";
import FadeInView from "../animatedComponents/FadeInView";
import OnboardingImage from "./OnboardingImage";
import SecondHeader from "./SecondHeader";

const OnboardingView = ({ icon, headerText, secondHeaderText }) => {
  return (
    <View>
      <Header text={headerText} />
      <SecondHeader text={secondHeaderText} />
      <View style={styles.imageContainer}>
        <FadeInView duration={2500}>
          <OnboardingImage iconSource={icon} height={260} width={326} />
        </FadeInView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flex: 1,
    paddingTop: 0,
    justifyContent: "space-evenly",
    //justifyContent: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },
});

export default OnboardingView;
