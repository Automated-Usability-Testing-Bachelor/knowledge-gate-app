import {FontAwesome} from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useState} from 'react';

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    // Load any resources or data that we need prior to rendering the app
    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                // Load fonts
                await Font.loadAsync({
                    ...FontAwesome.font,
                    'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
                    //sans
                    'Sans-Bold': require('../assets/fonts/IBM_Plex_Sans/IBMPlexSans-Bold.ttf'),
                    'Sans-BoldItalic': require('../assets/fonts/IBM_Plex_Sans/IBMPlexSans-BoldItalic.ttf'),
                    'Sans-ExtraLight': require('../assets/fonts/IBM_Plex_Sans/IBMPlexSans-ExtraLight.ttf'),
                    'Sans-ExtraLightItalic': require('../assets/fonts/IBM_Plex_Sans/IBMPlexSans-ExtraLightItalic.ttf'),
                    'Sans-Italic': require('../assets/fonts/IBM_Plex_Sans/IBMPlexSans-Italic.ttf'),
                    'Sans-Light': require('../assets/fonts/IBM_Plex_Sans/IBMPlexSans-Light.ttf'),
                    'Sans-LightItalic': require('../assets/fonts/IBM_Plex_Sans/IBMPlexSans-LightItalic.ttf'),
                    'Sans-Medium': require('../assets/fonts/IBM_Plex_Sans/IBMPlexSans-Medium.ttf'),
                    'Sans-MediumItalic': require('../assets/fonts/IBM_Plex_Sans/IBMPlexSans-MediumItalic.ttf'),
                    'Sans-Regular': require('../assets/fonts/IBM_Plex_Sans/IBMPlexSans-Regular.ttf'),
                    'Sans-SemiBold': require('../assets/fonts/IBM_Plex_Sans/IBMPlexSans-SemiBold.ttf'),
                    'Sans-SemiBoldItalic': require('../assets/fonts/IBM_Plex_Sans/IBMPlexSans-SemiBoldItalic.ttf'),
                    'Sans-Thin': require('../assets/fonts/IBM_Plex_Sans/IBMPlexSans-Thin.ttf'),
                    'Sans-ThinItalic': require('../assets/fonts/IBM_Plex_Sans/IBMPlexSans-ThinItalic.ttf'),
                    //serif
                    'Serif-Bold': require('../assets/fonts/IBM_plex_serif/IBMPlexSerif-Bold.ttf'),
                    'Serif-BoldItalic': require('../assets/fonts/IBM_plex_serif/IBMPlexSerif-BoldItalic.ttf'),
                    'Serif-ExtraLight': require('../assets/fonts/IBM_plex_serif/IBMPlexSerif-ExtraLight.ttf'),
                    'Serif-ExtraLightItalic': require('../assets/fonts/IBM_plex_serif/IBMPlexSerif-ExtraLightItalic.ttf'),
                    'Serif-Italic': require('../assets/fonts/IBM_plex_serif/IBMPlexSerif-Italic.ttf'),
                    'Serif-Light': require('../assets/fonts/IBM_plex_serif/IBMPlexSerif-Light.ttf'),
                    'Serif-LightItalic': require('../assets/fonts/IBM_plex_serif/IBMPlexSerif-LightItalic.ttf'),
                    'Serif-Medium': require('../assets/fonts/IBM_plex_serif/IBMPlexSerif-Medium.ttf'),
                    'Serif-MediumItalic': require('../assets/fonts/IBM_plex_serif/IBMPlexSerif-MediumItalic.ttf'),
                    'Serif-Regular': require('../assets/fonts/IBM_plex_serif/IBMPlexSerif-Regular.ttf'),
                    'Serif-SemiBold': require('../assets/fonts/IBM_plex_serif/IBMPlexSerif-SemiBold.ttf'),
                    'Serif-SemiBoldItalic': require('../assets/fonts/IBM_plex_serif/IBMPlexSerif-SemiBoldItalic.ttf'),
                    'Serif-Thin': require('../assets/fonts/IBM_plex_serif/IBMPlexSerif-Thin.ttf'),
                    'Serif-ThinItalic': require('../assets/fonts/IBM_plex_serif/IBMPlexSerif-ThinItalic.ttf'),

                });
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}
