import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { MenuProvider } from 'react-native-popup-menu'
import useCachedResources from './hooks/useCachedResources'
import Navigation from './navigation'
import { ApolloWrapper } from './components/ApolloWrapper'
import { AuthenticationProvider } from './src/auth/Authentication'

const App = () => {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  }

  return (
    <AuthenticationProvider>
      <SafeAreaProvider>
        <ApolloWrapper>
          <MenuProvider>
            {/* eslint-disable-next-line react/style-prop-object */}
            <StatusBar style={'dark'} />
            <Navigation />
          </MenuProvider>
        </ApolloWrapper>
      </SafeAreaProvider>
    </AuthenticationProvider>
  )
}

export default App
