import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const Button = ({ title, style, ...rest }) => {
  return (
    <Pressable style={[styles.button, style]} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 13.5,
    backgroundColor: '#1E63EE',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  title: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});
