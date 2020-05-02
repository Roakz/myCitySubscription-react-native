import React, {useContext} from 'react';
import {Text, TextInput} from 'react-native';
import {Context} from '../Context/Store'

const AuthForm = props => {

  const [state] = useContext(Context);
  const {nameValue, emailValue, passwordValue, passwordConfirmationValue} = state;

  const confirmationField = (
    <>
      <Text>Confirmation:</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={passwordConfirmationValue}
      />
    </>
  );

  const nameField = (
    <>
      <Text>Name:</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={nameValue}
      />
    </>
  );

  return (
    <>
      {props.form == 'Register' ? nameField : <Text />}
      <Text>Email:</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={emailValue}
      />
      <Text>Password:</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={passwordValue}
      />
      {props.form == 'Register' ? confirmationField : <Text />}
    </>
  );
};

export default AuthForm;
