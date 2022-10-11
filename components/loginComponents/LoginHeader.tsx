import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'

const LoginHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{'Export Login'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "green",
  },
  header: {
    fontSize: 20,
    color: Colors.black.color
  }
})

export default LoginHeader
