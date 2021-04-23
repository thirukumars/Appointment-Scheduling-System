/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {postRegisterRequestData} from '../Api/create';
import {Input, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
  const [mobile, setMobile] = useState('');

  const RegisterApi = async () => {
    const data = {
      mobileNumber: mobile,
    };
    await AsyncStorage.setItem('@mobileNumber', mobile);
    await AsyncStorage.getItem('@mobileNumber');
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.inputLeft}>
            <Input placeholder="+91" />
          </View>
          <View style={styles.inputRight}>
            <Input
              onChangeText={e => {
                setMobile(e);
              }}
              placeholder="Mobile Number"
              maxLength={10}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.view}>
          <Button
            title="Sign Up"
            onPress={RegisterApi}
            buttonStyle={styles.button}></Button>
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
