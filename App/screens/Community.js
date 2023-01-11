import { Button } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import BotNavbar from '../components/BotNavbar';

export default function Community({navigation}) {
    return (
      <View style={styles.container}>
        <Text>Community</Text>
        {/* <BotNavbar currPage={'community'}/> */}
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