import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import LinkingConfiguration from './LinkingConfiguration';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome, Feather, FontAwesome5, EvilIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import { ColorSchemeName, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: "#DD2638",
        tabBarInactiveTintColor: "#fff",
        tabBarActiveBackgroundColor: "#fff",
        tabBarItemStyle: {
          alignItems: 'center',
          borderRadius: 10,
          padding: 5,
          marginRight: 5,
          marginLeft: 5,
          height: 55,
        },
        tabBarStyle:{
            paddingVertical: 5,
            borderRadius:15,
            backgroundColor:'#001B72',
            position:'absolute',
            height:65,
            left:10,
            right:10,
            bottom:20,
        },
      }}
      >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <AntDesign name="clockcircleo" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={NotFoundScreen}
        options={{
          title: 'Tab Three',
          tabBarIcon: ({ color }) => <Feather name="calendar" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={NotFoundScreen}
        options={{
          title: 'Tab Four',
          tabBarIcon: ({ color }) => <FontAwesome5 name="money-bill-wave-alt" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabFive"
        component={NotFoundScreen}
        options={{
          title: 'Tab Five',
          tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" size={24} color={color} />,
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
    });