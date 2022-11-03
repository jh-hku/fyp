// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Icon } from '@rneui/base';

import Home from '../screens/Home';
import Login from '../screens/login';

const homeName = 'Home'
const Tab = createBottomTabNavigator();

function BotNavbar({currPage}) {
    const navigation = useNavigation();

    const iconHeight = 40;
    const iconWidth = 53;
    const iconSize = 35;

    const [homeActive, toggleHomeActive] = currPage == 'home' ? useState(true) : useState(false);
    const [geneticsActive, toggleGeneticsActive] = currPage == 'genetics' ? useState(true) : useState(false);
    const [riskActive, toggleRiskActive] = currPage == 'risk' ? useState(true) : useState(false);
    const [communityActive, toggleCommunityActive] = currPage == 'community' ? useState(true) : useState(false);

    function navbarHelper(option) {
        switch (option) {
            case 'home':
                toggleHomeActive(true);
                toggleGeneticsActive(false);
                toggleRiskActive(false);
                toggleCommunityActive(false);
                navigation.replace("Home");
                break;
            case 'genetics':
                toggleHomeActive(false);
                toggleGeneticsActive(true);
                toggleRiskActive(false);
                toggleCommunityActive(false);
                navigation.replace("Genetics");
                break;
            case 'risk':
                toggleHomeActive(false);
                toggleGeneticsActive(false);
                toggleRiskActive(true);
                toggleCommunityActive(false);
                navigation.replace("Risk");
                break;
            case 'community':
                toggleHomeActive(false);
                toggleGeneticsActive(false);
                toggleRiskActive(false);
                toggleCommunityActive(true);
                navigation.replace("Community");
                break;
            default:
                break;    
        }
    }

    return (
        <View style={styles.BotNavbarContainer}>
            <View style={styles.BotNavbar}>
                <Pressable style={styles.IconBehave} onPress={() => {navbarHelper('home')}} android_ripple={{color:true, radius:50}}>
                    <Icon color={homeActive ? '#88B2FF' : '#C4C4C4'} name='home' height={iconHeight} width={iconWidth} size={iconSize}></Icon>
                    <Text style={homeActive ? {color: '#88B2FF', textAlign: 'center'} : {color: '#C4C4C4', textAlign: 'center'}}> Home </Text>
                </Pressable>
                <Pressable style={styles.IconBehave} onPress={() => {navbarHelper('genetics')}} >
                    <Icon color={geneticsActive ? '#88B2FF' : '#C4C4C4'} name='graph' type='simple-line-icon' height={iconHeight} width={iconWidth} size={iconSize}></Icon>
                    <Text style={geneticsActive ? {color: '#88B2FF', textAlign: 'center'} : {color: '#C4C4C4', textAlign: 'center'}}> Genetics </Text>
                </Pressable>
                <Pressable style={styles.IconBehave} onPress={() => {navbarHelper('risk')}}>
                    <Icon color={riskActive ? '#88B2FF' : '#C4C4C4'} name='heartbeat' type='font-awesome' height={iconHeight} width={iconWidth}  size={iconSize}></Icon>
                    <Text style={riskActive ? {color: '#88B2FF', textAlign: 'center'} : {color: '#C4C4C4', textAlign: 'center'}}> Risk </Text>
                </Pressable>
                <Pressable style={styles.IconBehave} onPress={() => {navbarHelper('community')}}>
                    <Icon color={communityActive ? '#88B2FF' : '#C4C4C4'} name='groups' height={iconHeight} width={iconWidth} size={iconSize}></Icon>
                    <Text style={communityActive ? {color: '#88B2FF', textAlign: 'center'} : {color: '#C4C4C4', textAlign: 'center'}}> Community </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    BotNavbarContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
    },

    BotNavbar: {
        elevation: 5,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowColor: '#000',
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
        width: '100%',
        justifyContent: 'space-evenly'
      },

    ActiveIconBehave: {
        padding: 20,
        paddingBottom: 40,
    },  

    IconBehave: {
        padding: 20,
        paddingBottom: 40,
    }

});


export default BotNavbar;