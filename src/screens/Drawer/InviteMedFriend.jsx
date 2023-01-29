import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const InviteMedFriend = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Страница приглащения мед-друга</Text>
    </SafeAreaView>
  );
};

export default InviteMedFriend;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
