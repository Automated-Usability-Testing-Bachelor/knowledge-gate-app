import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import { useCallback, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StackParamList } from '../../navigation/StackParamList'
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

export type StackNavigation = StackNavigationProp<StackParamList>

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('ardit@knowledgegategroup.com')
  const [password, setPassword] = useState<string>('Ardit123456')

  const [loginFailed, setLoginFailed] = useState<boolean>(false)

  const authenticate = useAuthenticate()

  const navigation = useNavigation<StackNavigation>()

  const handleSignIn = useCallback(async () => {
    if (!email || !password) {
      // TODO: Fix this
      setLoginFailed(true)

      return
    }

    try {
      await authenticate(email, password)
      navigation.navigate('Onboarding')
    } catch (error) {
      dlog(`Submit failed for an email: ${email}`, {
        extra: JSON.stringify(error),
      })
    }
  }, [authenticate, email, password, navigation])

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
      {loginFailed && <Text>{'Login failed'}</Text>}
      <LoginBtn name={'Login'} onClick={handleSignIn} />
      <InfoText />
    </View>
  )
}

export default LoginForm
