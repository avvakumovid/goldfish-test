import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const PatientDetail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Детальная страница пациента</Text>
    </SafeAreaView>
  );
};

export default PatientDetail;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
