import React from 'react';
import colors from './assets/colors/colors';
import {StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';

const App = () => {
  return <Text>This is text</Text>;
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default App;
