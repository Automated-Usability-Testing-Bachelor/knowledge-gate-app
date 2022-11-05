import { StyleSheet, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Colors from '../constants/Colors'
import Logo from '../components/loginComponents/Logo'
import LoginView from '../components/loginComponents/LoginView'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue.color,
    display: 'flex',
    flex: 1,
  },
  avoid: {
    flex: 1,
    justifyContent: 'space-between',
    minHeight: 650,
  },
  inner: {
    flex: 1,
    alignSelf: 'stretch',
  },
})

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.avoid}>
        <View style={styles.inner}>
          <Logo />
          <LoginView navigation={navigation} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaProvider>
  )
}

export default LoginScreen
