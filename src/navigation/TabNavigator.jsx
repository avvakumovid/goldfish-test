import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeSvg from '../components/icon/HomeSvg';
import NewsSvg from '../components/icon/NewsSvg';
import ProfileSvg from '../components/icon/ProfileSvg';
import DotsSvg from '../components/icon/DotsSvg';

import {
  MenuStackNavigator,
  NewsStackNavigator,
  PatientsStackNavigator,
  ProfileStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => <HomeSvg color={color} />,
          tabBarLabel: 'Пациенты',
        }}
        name='Patients-tab'
        component={PatientsStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => <ProfileSvg color={color} />,
          tabBarLabel: 'Профиль',
        }}
        name='Profile-tab'
        component={ProfileStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => <NewsSvg color={color} />,
          tabBarLabel: 'Новости',
        }}
        name='News-tab'
        component={NewsStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => <DotsSvg color={color} />,
          tabBarLabel: 'Меню',
        }}
        name='Menu-tab'
        component={MenuStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
