import { Text, StyleSheet, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerRoutes } from './../../../navigation/routes';
import DrawerButton from './DrawerButton';

const DrawerContent = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <Image
          style={styles.image}
          source={require('../../../../assets/photo.png')}
        />
        <Text style={styles.title}>Татьяна</Text>
      </View>
      <View style={styles.btns}>
        {DrawerRoutes.map(route => (
          <View key={route.name} style={styles.btn}>
            <DrawerButton route={route} />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    padding: 17,
    height: '100%',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: '#fff',
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 999,
  },
  title: {
    fontSize: 18,
    color: '#000000',
    marginLeft: 12,
    marginRight: 10,
  },
  btns: {
    display: 'flex',
  },
  btn: {
    marginTop: 27,
  },
});
