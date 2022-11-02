import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {NEXT_PUBLIC_API_URL} from '@env'
import Colors from '../constants/Colors'
import Logo from '../components/loginComponents/Logo'
import LoginView from '../components/loginComponents/LoginView'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue.color,
    display: 'flex',
    flex: 1
  },
  avoid: {
    flex: 1,
    // backgroundColor: "lightgreen",
    justifyContent: 'space-between',
    minHeight: 650
  },
  inner: {
    flex: 1,
    alignSelf: 'stretch'
    // backgroundColor: "lightblue",
  }
})

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.avoid}>
        <View style={styles.inner}>
          <Logo />
          <Text>{NEXT_PUBLIC_API_URL}</Text>
          <LoginView navigation={navigation} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaProvider>
  )
}

export default LoginScreen
