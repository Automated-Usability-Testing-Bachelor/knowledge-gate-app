import { useCallback, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useAuth } from '../../src/auth/Authentication'
import ForgotPassword from './ForgotPassword'
import InfoText from './InfoText'
import InputField from './InputField'
import LoginBtn from './LoginBtn'

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    justifyContent: 'center',
  },
  text: {
    fontSize: 10,
  },
})

const LoginForm: React.FC = () => {
  const { signIn } = useAuth()

  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const handleSignInClick = useCallback(() => {
    if (!email || !password) {
      // TODO: process better

      return
    }

    signIn({ username: email, password })
  }, [])

  return (
    <View style={styles.container}>
      <InputField
        prompt={'E-mail'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={setEmail}
      />

      <InputField
        prompt={'Password'}
        keyboardType={'default'}
        value={password}
        onChangeText={setPassword}
      />
      <ForgotPassword />
      <LoginBtn name={'Login'} onClick={handleSignInClick} />
      <InfoText />
    </View>
  )
}

export default LoginForm
