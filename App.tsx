/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { MenuProvider } from 'react-native-popup-menu'
import useCachedResources from './hooks/useCachedResources'
import Navigation from './navigation'
import { ApolloWrapper } from './components/ApolloWrapper'

const App = () => {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  }

  return (
    <SafeAreaProvider>
      <ApolloWrapper>
        <MenuProvider>
          <StatusBar style={'dark'} /* style={'dark'} */ />
          <Navigation />
        </MenuProvider>
      </ApolloWrapper>
    </SafeAreaProvider>
  )
}

export default App
