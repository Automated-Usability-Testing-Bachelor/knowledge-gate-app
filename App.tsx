import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';

function App() {
    const isLoadingComplete = useCachedResources();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <StatusBar style={"light"}/>
                <Navigation/>
            </SafeAreaProvider>
        );
    }
}

export default App;
