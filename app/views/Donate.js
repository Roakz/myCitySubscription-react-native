import * as React from 'react';
import {Text, Button} from 'react-native';
import ButtonMain from '../components/ButtonMain';
const DonatePage = ({navigation}) => {
  return (
    <>
      <Text>PLease select your prefered method.</Text>
      <ButtonMain
        title="Enter a code"
        accessibilityLabel="Click this button to enter a code."
        onPress={() => navigation.navigate('Code')}
      />
       <ButtonMain
        title="Use QR Scanner"
        accessibilityLabel="Click this button to use a Q R scanner."
        // QR scanner will be implemented on button click.
        onPress={() => navigation.navigate('Code')}
      />
    </>
  );
};

export default DonatePage;
