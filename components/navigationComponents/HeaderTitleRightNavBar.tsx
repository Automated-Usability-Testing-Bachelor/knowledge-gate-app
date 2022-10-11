import {Text} from "react-native";
import HeaderStyles from "./HeaderStyles";
import * as React from "react";
import {useRoute} from '@react-navigation/native';


export default function HeaderTitleRightNavBar() {
    const route = useRoute();
    return (
        <Text style={HeaderStyles.headerTitleStyle2}>
            {route.name}
        </Text>
    );
}