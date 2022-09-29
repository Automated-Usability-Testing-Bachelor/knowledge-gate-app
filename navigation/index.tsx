/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import HeaderView from "../components/calendar/HeaderView";
import SecondLogo from "../components/SecondLogo";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import CalendarScreen from "../screens/CalendarScreen";
import LoginScreen from "../screens/LoginScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
  const headerOptions = () => ({
    headerStyle: {
      //backgroundColor: Colors.blue.color,
      backgroundColor: "yellow",
    },
    headerTitle: "",
    headerTintColor: Colors.offWhite.color,
    headerShadowVisible: false,
    headerTransparent: false,
    headerRight: () => <SecondLogo />,
    statusBarAnimation: "fade",
    animation: "fade",
  });
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
