import * as React from 'react';
import {Text, TextInput} from 'react-native';

const AuthForm = props => {

  const [state] = useContext(Context);
  const {nameValue, emailValue, passwordValue, confirmPasswordValue} = state

  const confirmationField = (
    <>
      <Text>Confirmation:</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => onChangeText(text)}
        value={confirmPasswordValue}
      />
    </>
  );
  const nameField = (
    <>
      <Text>Name:</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => onChangeText(text)}
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
        onChangeText={text => onChangeText(text)}
        value={emailValue}
      />
      <Text>Password:</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => onChangeText(text)}
        value={passwordValue}
      />
      {props.form == 'Register' ? confirmationField : <Text />}
    </>
  );
};

export default AuthForm;
