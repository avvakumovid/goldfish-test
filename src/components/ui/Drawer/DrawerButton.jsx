import { Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PlusSvg from '../../icon/PlusSvg';
const DrawerButton = ({ route }) => {
  const { navigate } = useNavigation();
  return (
    <Pressable style={styles.button} onPress={() => navigate(route.name)}>
      <PlusSvg color={'#1E63EE'} />
      <Text style={styles.title}>{route.title}</Text>
    </Pressable>
  );
};

export default DrawerButton;

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginLeft: 8.5,
  },
});
