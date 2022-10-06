import {Text} from "react-native";
import HeaderStyles from "./HeaderStyles";
import * as React from "react";
import {useRoute} from '@react-navigation/native';


export default function HeaderTitleRightIndex() {
    const route = useRoute();
    return (
        <Text style={HeaderStyles.headerTitleStyle2}>
            {route.params.item.title}
        </Text>
    );
}
