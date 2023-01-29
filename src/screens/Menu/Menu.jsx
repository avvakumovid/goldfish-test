import React from 'react';
import Layout from '../../components/layouts/Layout';
import Button from '../../components/ui/Button/Button';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const { navigate } = useNavigation();
  return (
    <Layout>
      <Button
        onPress={() => {
          navigate('Settings');
        }}
        style={{ marginTop: 48 }}
        title='Настройки'
      />
    </Layout>
  );
};

export default Menu;
