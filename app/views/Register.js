import * as React from 'react';
import {Button, Text} from 'react-native';

const RegisterPage = ({navigation}) => {
  return (
    <>
      <Text>Regsiter Page</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </>
  );
};
export default RegisterPage;
