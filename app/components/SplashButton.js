import * as React from 'react';

import {Button} from 'react-native';

const SplashButton = props => {
  return (
    <Button
      onPress={props.onPress}
      title={props.title}
      accessibilityLabel={props.accessibilityLabel}
    />
  );
};

export default SplashButton;
