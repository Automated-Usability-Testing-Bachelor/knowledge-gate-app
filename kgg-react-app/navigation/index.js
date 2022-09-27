import {NavigationContainer,} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as React from "react";
import CalendarScreen from "../screens/CalendarScreen";
import LoginScreen from "../screens/LoginScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import ProjectsExpandedScreen from "../screens/ProjectExpandedScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import BottomTabNavigator from "./Navbar";

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Group>
                    <Stack.Screen
                        name="Root"
                        component={BottomTabNavigator}
                        options={{headerShown: false}}
                    />
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
                        name="NotFound"
                        component={NotFoundScreen}
                        options={{headerShown: false}}
                    />
                </Stack.Group>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
