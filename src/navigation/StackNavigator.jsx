import { createStackNavigator } from '@react-navigation/stack';
import Patients from '../screens/Patients/Patients';
import Profile from '../screens/Profile/Profile';
import News from '../screens/News/News';
import Menu from '../screens/Menu/Menu';
import PatientDetail from '../screens/Patients/PatientDetail';
import Settings from './../screens/Menu/Settings';
import NewsDetail from './../screens/News/NewsDetail';
import ProfileSettings from './../screens/Profile/ProfileSettings';

const Stack = createStackNavigator();

const PatientsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Patients' component={Patients} />
      <Stack.Screen name='Patient' component={PatientDetail} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='ProfileSettings' component={ProfileSettings} />
    </Stack.Navigator>
  );
};

const NewsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='News' component={News} />
      <Stack.Screen name='NewsDetail' component={NewsDetail} />
    </Stack.Navigator>
  );
};

const MenuStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Menu' component={Menu} />
      <Stack.Screen name='Settings' component={Settings} />
    </Stack.Navigator>
  );
};

export {
  PatientsStackNavigator,
  ProfileStackNavigator,
  NewsStackNavigator,
  MenuStackNavigator,
};
 