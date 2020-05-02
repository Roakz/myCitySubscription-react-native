import * as React from 'react';
import SplashButton from '../components/SplashButton';

const SplashPage = ({navigation}) => {
  return (
    <>
      <SplashButton
        title="Donate!"
        accessibilityLabel="Click this button to start the donation/subscription proccess."
        onPress={() => navigation.navigate('Donate')}
      />
      <SplashButton
        title="Login/Register"
        accessibilityLabel="Click this button to Log in."
        onPress={() => navigation.navigate('Login')}
      />
       <SplashButton
        title="Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </>
  );
};
export default SplashPage;
