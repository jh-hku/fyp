import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { View, StyleSheet, Alert, ActivityIndicator, Modal } from 'react-native';
import { Button, Input } from '@rneui/base';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function LoadingAnimation() {
  return (
    <Modal transparent={true}>
      <View style={styles.indicatorWrapper}>
        <ActivityIndicator size="large"/>
      </View>
    </Modal>
  );
}

export default function Login({navigation}) {
  const [email, setEmail] = React.useState('fyp@hku.hk');
  const [password, setPassword] = React.useState('123456');
  const [loading, setLoading] = React.useState(false);

  function onLogin() {
    setLoading(true)
    if (email === '' || password === '') {
      Alert.alert('Email or password is required')
      setLoading(false);
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoading(false);
          navigation.replace("Main");
          console.log(user);
          // store in AsyncStorage to be implemented
        })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
          if (errorCode === 'auth/user-not-found') {
            Alert.alert('Email or password is incorrect')
          } else {
            Alert.alert('Something went wrong')
          }
      });
    }
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputView} >
        <Input value={email} onChangeText={setEmail} placeholder='Username' style={styles.input} inputContainerStyle={{borderBottomWidth: 0}}/>
        <Input value={password} onChangeText={setPassword} placeholder='Password' style={styles.input} secureTextEntry={true} inputContainerStyle={{borderBottomWidth: 0}}/>
      </View>
      
      <Button title="Login" buttonStyle={styles.button} 
        // onPress={() => navigation.replace("Main")}
        onPress={() => {onLogin()}}
      />
      <Button 
        title="Don't have an account? Signup today!" 
        buttonStyle={styles.button} 
        onPress={() => navigation.navigate('Signup')}
      />

      <StatusBar style="auto" />
    
    { loading && <LoadingAnimation/> }
    </View>
  )
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
  },

  loadingView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

