import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from '@rneui/themed';
import BotNavbar from '../components/BotNavbar';


export default function Home({navigation}) {
    return (
        
      <View style={styles.container}>
        <Text>Home</Text>
        <Avatar
            size={64}
            rounded
            // style={styles.avatar}
            source={{uri:"https://randomuser.me/api/portraits/men/36.jpg"}}
            onPress={() => navigation.push("User")}
            containerStyle={{ backgroundColor: '#6733b9' }}
        />
        <BotNavbar currPage={'home'}/>
        <StatusBar style="auto" />
      </View>
  
    );
}


const styles = StyleSheet.create({
    avatar: {
        // position: 'relative',
        // top: 10,
        // right: 20
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }

});
