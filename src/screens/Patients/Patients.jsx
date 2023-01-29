import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Layout from '../../components/layouts/Layout';
import Button from '../../components/ui/Button/Button';

const Patients = () => {
  const { navigate } = useNavigation();
  return (
    <Layout>
      <Button
        onPress={() => {
          navigate('Patient');
        }}
        style={{ marginTop: 48 }}
        title='Страница пациента'
      />
    </Layout>
  );
};

export default Patients;
