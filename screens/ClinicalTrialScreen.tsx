import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import Colors from "../constants/Colors";
import SecondLogo from "../components/SecondLogo";
import BackgroundCards from "../components/BackgroundCardsTemplate";
import BodyView from "../components/clinicalTrialScreen/BodyView";
import {useRoute} from "@react-navigation/native";
import {BlackSansHeader2} from "../components/Texts/Headers";

const ClinicalTrialScreen = (props) => {
    const route = useRoute();
    const item = props.route.params.item;
    console.log(item);
    return (
        <SafeAreaView style={styles.container}>
            <SecondLogo/>
            <BackgroundCards
                header={<BlackSansHeader2 text={route.name}/>}
                body={BodyView({item})}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.blue.color,
        display: "flex",
        flex: 1,
    },
});

export default ClinicalTrialScreen;
