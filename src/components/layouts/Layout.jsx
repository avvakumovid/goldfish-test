import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BellSvg from '../icon/BellSvg';
import DownArrowSvg from './../icon/DownArrowSvg';

const Layout = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading}>
          <Image
            style={styles.image}
            source={require('../../../assets/photo.png')}
          />
          <Text style={styles.title}>Татьяна</Text>
          <DownArrowSvg color={'#fff'} />
        </View>
        <View style={styles.bell}>
          <BellSvg isInfo color={'#000'} />
        </View>
      </View>
      <View style={styles.wrapper}>{children}</View>
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E63EE',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
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
    color: '#fff',
    marginLeft: 12,
    marginRight: 10,
  },
  bell: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 999,
  },
  info: {
    width: 7,
    height: 7,
    position: 'absolute',
  },
  wrapper: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 17,
  },
});
