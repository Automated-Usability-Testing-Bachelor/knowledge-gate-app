import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import * as React from "react";
import {AntDesign, Feather, FontAwesome5, Ionicons} from "@expo/vector-icons";
import {StyleSheet} from "react-native";
import CalendarScreen from "../screens/CalendarScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import NotFoundScreen from '../screens/NotFoundScreen';
import ProfileScreen from "../screens/ProfileScreen";
import Colors from "../constants/Colors";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName="Profile"
            screenOptions={{
                tabBarActiveTintColor: Colors.red.color,
                tabBarInactiveTintColor: "rgba(0, 27, 114, 0.6)",
                tabBarItemStyle: styles.tabBarItemStyle,
                tabBarStyle: styles.tabBarStyle,
                tabBarLabelStyle: styles.tabBarLabelStyle,
                // tabBarItemStyle: ,
            }}
        >
            <BottomTab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    title: 'Profile',
                    headerShown: true,
                    headerStyle: styles.headerStyle,
                    tabBarIcon: ({color}) => <AntDesign name="user" size={22} color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Projects"
                component={ProjectsScreen}
                options={{
                    title: 'Projects',
                    headerShown: true,
                    headerStyle: styles.headerStyle,
                    tabBarIcon: ({color}) => <AntDesign name="clockcircleo" size={22} color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Calendar"
                component={CalendarScreen}
                options={{
                    title: 'Calendar',
                    headerShown: true,
                    headerStyle: styles.headerStyle,
                    tabBarIcon: ({color}) => <Feather name="calendar" size={22} color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Invoice"
                component={NotFoundScreen}
                options={{
                    title: 'Invoice',
                    headerShown: true,
                    headerStyle: styles.headerStyle,
                    tabBarIcon: ({color}) => <FontAwesome5 name="money-bill-wave-alt" size={22} color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Notifications"
                component={NotFoundScreen}
                options={{
                    title: 'Notifications',
                    headerShown: true,
                    headerStyle: styles.headerStyle,
                    tabBarIcon: ({color}) => <Ionicons name="notifications-outline" size={22} color={color}/>,
                }}
            />
        </BottomTab.Navigator>
    );
}


const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Colors.warmGrey.color,
        borderBottomWidth: 1,
        borderBottomColor: Colors.blue.color,
    },
    tabBarItemStyle: {
        alignItems: 'center',
        borderRadius: 10,
        paddingBottom: 5,
        marginRight: 5,
        marginLeft: 5,
        height: 55,
    },
    tabBarStyle: {
        backgroundColor: "white",
        borderTopWidth: 2,
        borderTopColor: "rgba(0, 27, 114, 0.6)",
    },
    tabBarLabelStyle: {
        fontSize: 9,
    }
});

export default BottomTabNavigator;