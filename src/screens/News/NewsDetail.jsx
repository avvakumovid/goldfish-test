import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NewsDetail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Детальная страница новости</Text>
    </SafeAreaView>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
