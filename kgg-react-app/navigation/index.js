/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {NavigationContainer,} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as React from "react";
import CalendarScreen from "../screens/CalendarScreen";
import LoginScreen from "../screens/LoginScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import ProjectsExpandedScreen from "../screens/ProjectExpandedScreen";

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProjectsExpanded"
                component={ProjectsExpandedScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Projects"
                component={ProjectsScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Calendar"
                component={CalendarScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
