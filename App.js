import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar style='light' />
    </SafeAreaProvider>
  );
}
