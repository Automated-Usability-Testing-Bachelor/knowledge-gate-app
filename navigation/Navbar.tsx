import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import CalendarScreen from '../screens/CalendarScreen'
import ProjectsScreen from '../screens/ProjectsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import Colors from '../constants/Colors'
import HeaderStyles from '../components/navigationComponents/HeaderStyles'
import KLogo from '../assets/logos/Logomark/KGG_Logomark_Blue_RGB.svg'
import Icons from '../components/navigationComponents/Icons'
import InvoiceScreen from '../screens/InvoiceScreen'
import NotificationScreen from '../screens/NotificationScreen'

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={'Calendar'}
      screenOptions={{
        tabBarActiveTintColor: Colors.red.color,
        tabBarInactiveTintColor: 'rgba(0, 27, 114, 0.6)',
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        headerStyle: HeaderStyles.headerStyle,
        headerTitleStyle: HeaderStyles.headerTitleStyle,
        headerTitleAlign: 'center',
        headerLeft: () => {
          return (
            <View style={{ paddingLeft: 20 }}>
              <KLogo width={30} height={30} />
            </View>
          )
        }
        // headerTitle: "",
        // headerRight: () => HeaderTitleRightNavBar(),
      }}
    >
      <BottomTab.Screen
        name={'Projects'}
        component={ProjectsScreen}
        options={{
          title: 'Projects',
          headerShown: true,
          tabBarIcon: ({ focused, color }) => (
            <Icons name={'Projects'} color={color} focused={focused} />
          )
        }}
      />
      <BottomTab.Screen
        name={'Invoice'}
        component={InvoiceScreen}
        options={{
          title: 'Invoices',
          headerShown: true,
          tabBarIcon: ({ focused, color }) => (
            <Icons name={'Invoice'} color={color} focused={focused} />
          )
        }}
      />
      <BottomTab.Screen
        name={'Calendar'}
        component={CalendarScreen}
        options={{
          title: 'Calendar',
          headerShown: true,
          tabBarIcon: ({ focused, color }) => (
            <Icons name={'Calendar'} color={color} focused={focused} />
          )
        }}
      />
      <BottomTab.Screen
        name={'Notifications'}
        component={NotificationScreen}
        options={{
          title: 'Notifications',
          headerShown: true,
          tabBarIcon: ({ focused, color }) => (
            <Icons name={'Notifications'} color={color} focused={focused} />
          )
        }}
      />
      <BottomTab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerShown: true,
          tabBarIcon: ({ focused, color }) => (
            <Icons name={'Profile'} color={color} focused={focused} />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarItemStyle: {
    alignItems: 'center',
    paddingBottom: 5,
    marginRight: 5,
    marginLeft: 5,
    height: 55
  },
  tabBarStyle: {
    backgroundColor: Colors.offWhite.color,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 27, 114, 0.6)',
    ...Platform.select({
      android: {
        paddingBottom: 60
      }
    })
  },
  tabBarLabelStyle: {
    fontSize: 9
  }
})

export default BottomTabNavigator
