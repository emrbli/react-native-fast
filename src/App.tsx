import { SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'
import Home from './screens/Home';
import { theme } from './styles/color';


// SplashScreen.preventAutoHideAsync()


export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: theme.current.background0, flex: 1 }}>
      <Home />
    </SafeAreaView>

  );

}


