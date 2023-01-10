import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import BotNavbar from '../components/BotNavbar';

export default function Risk({navigation}) {
    return (
      <View style={styles.container}>
        <Text>Risk</Text>
        {/* <BotNavbar currPage={'risk'}/> */}
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