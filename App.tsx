import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { MenuProvider } from 'react-native-popup-menu'
import useCachedResources from './hooks/useCachedResources'
import Navigation from './navigation'

const App = () => {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  }

  return (
    <SafeAreaProvider>
      <MenuProvider>
        <StatusBar style={'dark'} />
        <Navigation />
      </MenuProvider>
    </SafeAreaProvider>
  )
}

export default App
