import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import BotNavbar from '../components/BotNavbar';
import BarGraph from '../components/BarGraph';


export default function Home({navigation}) {
    return (
        
      <View style={styles.container}>
        <BarGraph/>
        <Text>Home</Text>
        <BotNavbar currPage={'home'}/>
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
