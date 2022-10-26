import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: Colors.black.color
  }
})

const LoginHeader = () => {
  return (
    <View>
      <Text style={styles.header}>{'Export Login'}</Text>
    </View>
  )
}

export default LoginHeader
