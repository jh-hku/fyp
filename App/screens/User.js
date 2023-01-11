import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from '@rneui/base'
import { Image, ImageBackground, StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import BotNavbar from '../components/BotNavbar';

export default function User({ navigation }) {
    return (
        <ScrollView
            style={styles.screenContainer}
            hasSafeArea={false}
        >
            <ImageBackground
                style={styles.imageBackground}
                source={{uri: "https://i.pinimg.com/564x/b1/31/0a/b1310a301398dc8c87f59e5dc9b37f40.jpg"}}
                // resizeMode="cover"
            />
            <View
                style={styles.container}
                elevation={0}
                useThemeGutterPadding={true}
            >
                <Image
                    style={styles.avatar}
                    source={{uri: "https://randomuser.me/api/portraits/men/36.jpg"}}
                />
                <Text
                    style={styles.avatarName}
                >
                    John Doe
                </Text>
                <Button title="Edit Profile" containerStyle={styles.editProfile} 
                    buttonStyle={{borderRadius: 40}}
                    type="outline" />
            </View>
            <View elevation={0} style={styles.optionContainer}>
                <TouchableHighlight underlayColor='none' style={styles.touchableFirst} onPress={() => navigation.push("User & Health Details")} >
                    <View style={styles.view}>
                        <Text style={styles.optionText}> User & Health Details </Text>
                    {/* <Icon
                        style={styles.iconFE}
                        size={24}
                        color={theme.colors.strong}
                        name="MaterialIcons/account-circle"
                    /> */}
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='none' style={styles.touchable} onPress={() => navigation.push("Genetics Data")}>
                    <View style={styles.view}>
                        <Text style={styles.optionText}> Genetics Data </Text>
                    {/* <Icon
                        style={styles.iconCl}
                        color={theme.colors.strong}
                        name="MaterialIcons/notifications"
                        size={24}
                    /> */}
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='none' style={styles.touchable}>
                    <View style={styles.view}>
                        <Text style={styles.optionText}> Manage Fitbit </Text>
                    {/* <Icon
                        style={styles.iconZz}
                        color={theme.colors.strong}
                        size={24}
                        name="MaterialIcons/history"
                    /> */}
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='none' style={styles.touchable}>
                    <View style={styles.view}>
                        <Text style={styles.optionText}> Medical ID </Text>
                    {/* <Icon
                        style={styles.iconZb}
                        size={24}
                        name="MaterialIcons/payment"
                        color={theme.colors.strong}
                    /> */}
                    </View>
                </TouchableHighlight>

                <View style={styles.touchable}>
                    <Text></Text>
                </View>
                <TouchableHighlight underlayColor='none' style={styles.touchable}>
                    <View style={styles.view}>
                        <Text style={styles.signOutText}> Sign Out </Text>
                    {/* <Icon
                        style={styles.iconZb}
                        size={24}
                        name="MaterialIcons/payment"
                        color={theme.colors.strong}
                    /> */}
                    </View>
                </TouchableHighlight>
                <View style={styles.touchable}></View>
            </View>
      </ScrollView>
  
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: 220,
    },

    container: {
        alignItems: 'center',
        marginTop: -65,
    },

    optionContainer: {
        paddingLeft: 20,
        paddingRight: 20
    },

    containerSignOut: {
        bottom: 10,
        borderColor: 'red',
        color: 'red',
        alignItems: 'center',
        // marginTop: -65,
    },

    avatar: {
        height: 130,
        width: 130,
        borderColor: 'black',
        borderRadius: 80
    },

    avatarName: {
        width: '100%',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 9,
        marginBottom: 10,
        fontWeight: 'bold'
    },  

    editProfile: {
        width: 200,
        // borderRadius: 'solid 1px black 40',
        borderColor: 'black'
    },

    touchableFirst: {
        borderTopWidth: 1,
        paddingTop: 12,
        paddingBottom: 12,
        marginTop: 32,
        borderColor: '#bdbdbd'
    },

    touchable: {
        paddingBottom: 12,
        paddingTop: 12,
        borderTopWidth: 1,
        borderColor: '#bdbdbd'
    },

    view: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 5,
    },

    optionText: {
        fontSize: 14
    },

    signOutText: {
        fontSize: 14,
        color: 'red'
    },
  
    icon: {
        height: 24,
        width: 24,
    },
});