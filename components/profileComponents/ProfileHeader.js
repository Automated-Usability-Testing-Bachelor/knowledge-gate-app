import {BlackSansHeader2} from "../Texts/Headers";
import React from "react";
import {useRoute} from "@react-navigation/native";
import {View} from "react-native";


function ProfileHeader() {
    const route = useRoute();
    return (
        <View>
            <BlackSansHeader2 text={route.name}/>
        </View>
    );
}

export default ProfileHeader;