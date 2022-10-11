import React from "react";
import { StyleSheet, View } from "react-native";
import FadeInView from "../animatedComponents/FadeInView";
import { BlueSerifHeader1 } from "../Texts/Headers";

export type Props = {
  text: string;
};

const Header: React.FC<Props> = ({ text }) => {
  return (
    <View style={styles.container}>
      <FadeInView duration={2000}>
        <BlueSerifHeader1 text={text} />
      </FadeInView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
});
export default Header;
