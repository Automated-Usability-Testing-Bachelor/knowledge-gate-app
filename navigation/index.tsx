import {NavigationContainer} from "@react-navigation/native";
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
import Colors from "../constants/Colors";
import {createStackNavigator} from "@react-navigation/stack";
import ProfilePublicationsClinicalTrialsScreen from "../screens/ProfilePublicationsClinicalTrialsScreen";

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

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
            <Stack.Navigator
                screenOptions={{
                    headerStyle: HeaderStyles.headerStyle,
                    headerTitleStyle: HeaderStyles.headerTitleStyle,
                    headerTitleAlign: "center",
                    headerBackTitleVisible: false,
                    headerTintColor: Colors.red.color,
                    // headerShadowVisible: false,
                    // headerTitle: "",
                    // headerRight: () => HeaderTitleRightIndex(),
                }}
            >
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
                        // @ts-ignore
                        title: route.params.item.title,
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
                    name="ProfilePublicationsClinicalTrials"
                    component={ProfilePublicationsClinicalTrialsScreen}
                    options={{title: "Publications and Clinical Trials", headerShown: true}}
                />
                <Stack.Screen
                    name="PublicationScreen"
                    component={PublicationScreen}
                    options={({route}) => ({
                        // @ts-ignore
                        title: route.params.item.title,
                    })}
                />
                <Stack.Screen
                    name="ClinicalTrialScreen"
                    component={ClinicalTrialScreen}
                    options={({route}) => ({
                        // @ts-ignore
                        title: route.params.item.title,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
