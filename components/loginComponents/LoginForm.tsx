import { useCallback, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useAuthenticate } from '../../src/auth/useAuthenticate'
import { dlog } from '../../src/utils/dlog'
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
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const authenticate = useAuthenticate()

  const handleSignIn = useCallback(async () => {
    if (!email || !password) {
      // TODO: Fix this

      return
    }

    try {
      await authenticate(email, password)
    } catch (error) {
      dlog(`Submit failed for an email: ${email}`, {
        extra: JSON.stringify(error),
      })
    }
  }, [authenticate, email, password])

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
      <LoginBtn name={'Login'} onClick={handleSignIn} />
      <InfoText />
    </View>
  )
}

export default LoginForm
