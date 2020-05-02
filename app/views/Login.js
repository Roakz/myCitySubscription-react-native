import * as React from 'react';
import {Text, TextInput} from 'react-native';
import AuthForm from '../components/AuthForm';

const LoginPage = ({navigation}) => {
  
  return (
    <>
      <AuthForm />
      <Text style={{color: 'blue'}}
      onPress={() => { navigation.navigate('Register')}}>
      Register an account
     </Text>
    </>
  );
};
export default LoginPage;
