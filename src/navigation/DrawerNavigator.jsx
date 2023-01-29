import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../components/ui/Drawer/DrawerContent';
import BottomTabNavigator from './TabNavigator';
import AddPatient from './../screens/Drawer/AddPatient';
import InviteMedFriend from './../screens/Drawer/InviteMedFriend';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'transparent',
        },
      }}
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name='Home' component={BottomTabNavigator} />
      <Drawer.Screen name='AddPatient' component={AddPatient} />
      <Drawer.Screen name='InviteMedFriend' component={InviteMedFriend} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
