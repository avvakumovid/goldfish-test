import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Layout from '../components/layouts/Layout';

import Button from '../components/ui/Button/Button';
import MyDrawer from './DrawerNavigator';

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default Navigation;
