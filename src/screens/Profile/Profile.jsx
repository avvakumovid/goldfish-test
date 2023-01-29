import React from 'react';
import Layout from '../../components/layouts/Layout';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/ui/Button/Button';

const Profile = () => {
  const { navigate } = useNavigation();
  return (
    <Layout>
      <Button
        onPress={() => {
          navigate('ProfileSettings');
        }}
        style={{ marginTop: 48 }}
        title='Настройки профиля'
      />
    </Layout>
  );
};

export default Profile;
