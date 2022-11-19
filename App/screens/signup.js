import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { View, StyleSheet } from 'react-native';
import { Button, Input } from '@rneui/base';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.inputView} >
        <Input placeholder='Username' style={styles.input} inputContainerStyle={{borderBottomWidth: 0}}/>
        <Input placeholder='Password' style={styles.input} secureTextEntry={true} inputContainerStyle={{borderBottomWidth: 0}}/>
        <Input placeholder='Re-enter Password' style={styles.input} secureTextEntry={true} inputContainerStyle={{borderBottomWidth: 0}}/>
      </View>
      
      <Button title="Signup" buttonStyle={styles.button} 
        onPress={() => navigation.replace("Login")}
      />
      <Button 
        title="Have an account? Login instead!" 
        buttonStyle={styles.button} 
        onPress={() => navigation.navigate('Login')}
      />

      <StatusBar style="auto" />
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputView: {
    width: 320,
    justifyContent: 'center',
  },

  input: {
    borderWidth: 0.2,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingLeft: 20,
  },


  button: {
    margin: 10,
    width: 300,
    borderRadius: 5,
  }
});

