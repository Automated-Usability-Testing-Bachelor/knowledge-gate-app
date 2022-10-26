import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import InputField from './InputField'
import LoginBtn from './LoginBtn'
import InfoText from './InfoText'
import ForgotPassword from './ForgotPassword'

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    justifyContent: 'center'
  },
  text: {
    fontSize: 10
  }
})

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <InputField prompt={'E-mail'} keyboardType={'email-address'} />

      <InputField prompt={'Password'} keyboardType={'default'} />
      <ForgotPassword />
      <LoginBtn name={'Login'} />
      <InfoText />
    </View>
  )
}

export default LoginForm
