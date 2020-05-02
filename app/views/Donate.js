import * as React from 'react';
import {Text, Button} from 'react-native';
const DonatePage = ({navigation}) => {
  return (
    <>
      <Text>Donate page</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </>
  );
};

export default DonatePage;
