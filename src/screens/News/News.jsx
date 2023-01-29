import React from 'react';
import Layout from '../../components/layouts/Layout';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/ui/Button/Button';

const News = () => {
  const { navigate } = useNavigation();
  return (
    <Layout>
      <Button
        onPress={() => {
          navigate('NewsDetail');
        }}
        style={{ marginTop: 48 }}
        title='Страница новости'
      />
    </Layout>
  );
};

export default News;
