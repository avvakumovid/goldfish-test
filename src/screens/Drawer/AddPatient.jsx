import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddPatient = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Добавление пациента</Text>
    </SafeAreaView>
  );
};

export default AddPatient;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
