/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// views
import Register from './app/views/Register';
import Login from './app/views/Login';
import Splash from './app/views/Splash';
import Donate from './app/views/Donate';
import Dashboard from './app/views/Dashboard';
import Code from './app/views/Code';
import Store from './app/Context/Store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <Store>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{title: 'MyCitySubscription'}}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Donate" component={Donate} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Code" component={Code} />
          </Stack.Navigator>
        </NavigationContainer>
      </Store>
    </>
  );
};

export default App;
