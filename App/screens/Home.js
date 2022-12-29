import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import BotNavbar from '../components/BotNavbar';
import BarGraph from '../components/BarGraph';

// to be replaced by real data
const dummydata = [
  { day: "MON", steps: 13120 },
  { day: "TUE", steps: 13200 },
  { day: "WED", steps: 14250 },
  { day: "THU", steps: 13030 },
  { day: "FRI", steps: 10557 },
  { day: "SAT", steps: 13976 },
  { day: "SUN", steps: 12250 },
];

const Home = ({navigation}) => {
    return (
      <View style={styles.container}>
        <BarGraph data={dummydata}/>
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

export default Home;