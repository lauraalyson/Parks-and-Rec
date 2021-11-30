import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {colors, sizes} from './theme';

const TextButton = ({
  label,
  customContainerStyle,
  customLabelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: sizes.radius,
        backgroundColor: colors.white,
        ...customContainerStyle,
      }}
      onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
