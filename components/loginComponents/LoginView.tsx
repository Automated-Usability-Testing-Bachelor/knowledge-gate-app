import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import LoginForm from './LoginForm'
import Colors from '../../constants/Colors'
import LoginHeader from './LoginHeader'

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: Colors.warmGrey.color,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  }
})

const LoginView: React.FC = () => {
  return (
    <View style={styles.container}>
      <LoginHeader />
      <LoginForm />
    </View>
  )
}

export default LoginView
