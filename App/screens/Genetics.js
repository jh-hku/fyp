import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import BotNavbar from '../components/BotNavbar';

export default function Genetics({navigation}) {
    return (
      <View style={styles.container}>
        <Text>Genetics</Text>
        <BotNavbar currPage={'genetics'}/>
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

});