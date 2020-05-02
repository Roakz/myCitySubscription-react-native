import * as React from 'react';

import {Text, Button} from 'react-native';

const LoginPage = ({navigation}) => {
  return (
    <>
      <Text> Login Page </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </>
  );
};

export default LoginPage;
