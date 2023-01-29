import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileSettings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Страница настроек профиля</Text>
    </SafeAreaView>
  );
};

export default ProfileSettings;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
