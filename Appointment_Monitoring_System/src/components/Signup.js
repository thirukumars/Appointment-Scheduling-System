/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Button} from 'react-native-elements';
const Signup = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.inputLeft}>
            <Input placeholder="+91" />
          </View>
          <View style={styles.inputRight}>
            <Input placeholder="Mobile Number" />
          </View>
        </View>
        <View style={styles.view}>
          <Button title="Sign Up" buttonStyle={styles.button}></Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputLeft: {
    width: '20%',
  },
  inputRight: {
    width: '80%',
  },
  button: {
    borderRadius: 40,
    height: 50,
  },
  view: {
    width: '90%',
  },
});

export default Signup;
