/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import Signup from './src/components/Signup';
import Header from './src/components/Header';
const App = () => {
  return (
    <>
      <Header />
      <Signup />
    </>
  );
};

export default App;
