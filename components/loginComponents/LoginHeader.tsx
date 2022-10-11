import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {},
  header: {
    fontSize: 20,
    color: Colors.black.color
  }
})

const LoginHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{'Export Login'}</Text>
    </View>
  )
}

export default LoginHeader
