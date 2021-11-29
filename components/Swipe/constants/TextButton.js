import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {COLORS, SIZES} from './theme';

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
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...customContainerStyle,
      }}
      onPress={onPress}>
      <Text style={{...customLabelStyle}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
