import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import NotFoundScreen from '../screens/NotFoundScreen';
import {AntDesign, Feather, FontAwesome5, Ionicons} from '@expo/vector-icons';
import {StyleSheet} from 'react-native';
import CalendarScreen from "../screens/CalendarScreen";
import ProjectsScreen from "../screens/ProjectsScreen";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName="Calendar"
            screenOptions={{
                tabBarActiveTintColor: "#DD2638",
                tabBarInactiveTintColor: "#fff",
                tabBarActiveBackgroundColor: "#fff",
                tabBarItemStyle: styles.tabBarItemStyle,
                tabBarStyle: styles.tabBarStyle,
                tabBarLabelStyle: styles.tabBarLabelStyle,
            }}
        >
            <BottomTab.Screen
                name='NotFound'
                component={NotFoundScreen}
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({color}) => <AntDesign name="user" size={22} color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Projects"
                component={ProjectsScreen}
                options={{
                    title: 'Projects',
                    headerShown: false,
                    tabBarIcon: ({color}) => <AntDesign name="clockcircleo" size={22} color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Calendar"
                component={CalendarScreen}
                options={{
                    title: 'Calendar',
                    headerShown: false,
                    tabBarIcon: ({color}) => <Feather name="calendar" size={22} color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Invoice"
                component={NotFoundScreen}
                options={{
                    title: 'Invoice',
                    headerShown: false,
                    tabBarIcon: ({color}) => <FontAwesome5 name="money-bill-wave-alt" size={22} color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Notifications"
                component={NotFoundScreen}
                options={{
                    title: 'Notifications',
                    headerShown: false,
                    tabBarIcon: ({color}) => <Ionicons name="notifications-outline" size={22} color={color}/>,
                }}
            />
        </BottomTab.Navigator>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
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
        paddingVertical: 5,
        borderRadius: 15,
        backgroundColor: '#001B72',
        position: 'absolute',
        height: 65,
        left: 3,
        right: 3,
        bottom: 20,
    },
    tabBarLabelStyle: {
        fontSize: 9,
    }
});

export default BottomTabNavigator;