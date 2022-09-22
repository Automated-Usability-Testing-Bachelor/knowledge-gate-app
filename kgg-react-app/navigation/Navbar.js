import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import NotFoundScreen from '../screens/NotFoundScreen';
import {AntDesign, Feather, FontAwesome5, Ionicons} from '@expo/vector-icons';
import {StyleSheet, Text} from 'react-native';

// const BottomTab = createBottomTabNavigator<RootTabParamList>();
const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName="Calendar"
            screenOptions={({route}) => ({
                tabBarActiveTintColor: "#DD2638",
                tabBarInactiveTintColor: "#fff",
                tabBarActiveBackgroundColor: "#fff",
                tabBarItemStyle: styles.tabBarItemStyle,
                tabBarStyle: styles.tabBarStyle,
                tabBarLabel: ({focused}) => {
                    return focused
                        // ? (<Text style={{ fontWeight: 'bold', fontSize: 8, color:"#DD2638"  }} >{route.name}</Text>)
                        ? (<Text style={{fontWeight: 'normal', fontSize: 9, color: "#DD2638"}}>{route.name}</Text>)
                        // ? (<Text adjustsFontSizeToFit numberOfLines={1} style={{ fontWeight: 'normal', color:"#DD2638"  }} >{route.name}</Text>)
                        : (<Text style={{fontWeight: 'normal', fontSize: 8, color: "#fff"}}>{route.name}</Text>)
                },
            })}
        >
            <BottomTab.Screen
                name='Profile'
                component={NotFoundScreen}
                options={{
                    title: 'Profile',
                    tabBarIcon: ({color}) => <AntDesign name="user" size={22} color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Projects"
                component={NotFoundScreen}
                options={{
                    title: 'Projects',
                    tabBarIcon: ({color}) => <AntDesign name="clockcircleo" size={22} color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Calendar"
                component={NotFoundScreen}
                options={{
                    title: 'Calendar',
                    tabBarIcon: ({color}) => <Feather name="calendar" size={22} color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Invoice"
                component={NotFoundScreen}
                options={{
                    title: 'Invoice',
                    tabBarIcon: ({color}) => <FontAwesome5 name="money-bill-wave-alt" size={22} color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Notifications"
                component={NotFoundScreen}
                options={{
                    title: 'Notifications',
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
});