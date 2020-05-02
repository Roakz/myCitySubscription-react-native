import * as React from 'react'
import {Text, TextInput} from 'react-native'

const AuthForm = (props) => {

  const [emailValue, emailSetter] = React.useState('enter your email here...');
  const [passwordValue, passwordSetter] = React.useState('enter your password here...');
  const [confirmPasswordValue, confirmpasswordSetter] = React.useState('confirm your password here...');

  const confirmationField = 
    <>
    <Text>Confirmation:</Text>
    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={text => onChangeText(text)}
      value={confirmPasswordValue}
    />
    </>
  

  return (
    <>
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
      {props.form == "Register" ? 
      confirmationField
      : 
      <Text></Text>
    }
      
    </>
  )
}

export default AuthForm