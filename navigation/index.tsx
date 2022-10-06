import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as React from "react";
import CalendarScreen from "../screens/CalendarScreen";
import LoginScreen from "../screens/LoginScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import ProjectExpandedScreen from "../screens/ProjectExpandedScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import BottomTabNavigator from "./Navbar";
import ProfileScreen from "../screens/ProfileScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import OnboardingCarouselScreen from "../screens/OnboardingCarouselScreen";
import PublicationScreen from "../screens/PublicationScreen";
import ClinicalTrialScreen from "../screens/ClinicalTrialScreen";
import HeaderStyles from "../components/navigationComponents/HeaderStyles";

const Stack = createNativeStackNavigator();

const OnboardingFlow = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Start"
                component={OnboardingScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Carousel"
                component={OnboardingCarouselScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Root"
                    component={BottomTabNavigator}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Onboarding"
                    component={OnboardingFlow}
                    options={{headerShown: false}}
                />

                <Stack.Screen
                    name="ProjectsExpanded"
                    component={ProjectExpandedScreen}
                    options={({route}) => ({
                        title: route.params.item.title,
                        headerShown: true,
                        headerStyle: HeaderStyles.headerStyle,
                        headerTitleStyle: HeaderStyles.headerTitleStyle,
                        headerTitleAlign: "center",
                        headerBackTitleVisible: false,
                        // headerTitle: "",
                        // headerRight: () => HeaderTitleRightIndex(),
                    })}
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
                    name="Not Found"
                    component={NotFoundScreen}
                    options={{headerShown: false}}
                />

                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="PublicationScreen"
                    component={PublicationScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="ClinicalTrialScreen"
                    component={ClinicalTrialScreen}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
