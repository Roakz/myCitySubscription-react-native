import * as React from 'react';
import ButtonMain from '../components/ButtonMain';

const SplashPage = ({navigation}) => {
  return (
    <>
      <ButtonMain
        title="Donate!"
        accessibilityLabel="Click this button to start the donation/subscription proccess."
        onPress={() => navigation.navigate('Donate')}
      />
      <ButtonMain
        title="Login/Register"
        accessibilityLabel="Click this button to Log in."
        onPress={() => navigation.navigate('Login')}
      />
       <ButtonMain
        title="Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </>
  );
};
export default SplashPage;
