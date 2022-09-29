import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import { MenuProvider } from "react-native-popup-menu";

function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <MenuProvider>
          <StatusBar style={"light"} />
          <Navigation />
        </MenuProvider>
      </SafeAreaProvider>
    );
  }
}

export default App;
