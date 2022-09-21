import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import NotFoundScreen from '../screens/NotFoundScreen';
import { FontAwesome, Feather, FontAwesome5, EvilIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Calendar"
      screenOptions={{
        tabBarActiveTintColor: "#DD2638",
        tabBarInactiveTintColor: "#fff",
        tabBarActiveBackgroundColor: "#fff",
//         tabBarShowLabel: false,
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
      }}>
      <BottomTab.Screen
        name="Profile"
        component={NotFoundScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Profile',
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Projects"
        component={NotFoundScreen}
        options={{
          title: 'Projects',
          tabBarIcon: ({ color }) => <AntDesign name="clockcircleo" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Calendar"
        component={NotFoundScreen}
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color }) => <Feather name="calendar" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Invoice"
        component={NotFoundScreen}
        options={{
          title: 'Invoice',
          tabBarIcon: ({ color }) => <FontAwesome5 name="money-bill-wave-alt" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotFoundScreen}
        options={{
          title: 'Notifications',
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