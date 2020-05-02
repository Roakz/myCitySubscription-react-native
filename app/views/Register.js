import * as React from 'react';
import {Text} from 'react-native';
import AuthForm from '../components/AuthForm'

const RegisterPage = () => {
  return (
    <>
      <Text>Regsiter Page</Text>
      <AuthForm form="Register"/>
    </>
  );
};
export default RegisterPage;
