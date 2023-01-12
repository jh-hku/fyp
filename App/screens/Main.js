import React from 'react';
import { Tab as TabComponent, TabView } from '@rneui/themed';
import Home from './Home';
import Genetics from './Genetics';
import Risk from './Risk';
import Community from './Community';
import {  StyleSheet } from 'react-native';
import { Icon } from '@rneui/base';


const Main = ({ navigation }) => {
    const [index, setIndex] = React.useState(0);

    const iconSize = 35;
    
    return (
        <>
            <TabView value={index} onChange={setIndex} disableSwipe={true} disableTransition={true}>
                <TabView.Item style={{width: '100%'}}>
                    <Home navigation={navigation} />
                </TabView.Item>
                <TabView.Item style={{width: '100%'}}>
                    <Genetics navigation={navigation} />
                </TabView.Item>
                <TabView.Item style={{width: '100%'}}>
                    <Risk navigation={navigation} />
                </TabView.Item>
                <TabView.Item style={{width: '100%'}}>
                    <Community navigation={navigation} />
                </TabView.Item>
            </TabView>

            <TabComponent
                value={index}
                containerStyle={styles.container}
                onChange={(e) => setIndex(e)}
                disableIndicator={true}
                variant="primary">
                <TabComponent.Item
                    title="Home"
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.textStyle}
                    icon={<Icon color='#FFFFFF' name='home' size={ iconSize }></Icon>}/>
                <TabComponent.Item
                    title="Genetics"
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.textStyle}
                    icon={<Icon color='#FFFFFF' name='graph' type='simple-line-icon' size={ iconSize }></Icon>}/>
                <TabComponent.Item
                    title="Risk"
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.textStyle}
                    icon={<Icon color='#FFFFFF' name='heartbeat' type='font-awesome' size={ iconSize }></Icon>}/>
                <TabComponent.Item
                    title="Community"
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.textStyle}
                    icon={<Icon color='#FFFFFF' name='groups' size={ iconSize }></Icon>}/>
            </TabComponent>
        </>
    );
};


const styles = StyleSheet.create({ 
    container: { 
        paddingBottom: 20,
    },
    buttonStyle: {
        paddingStart:0,
        paddingEnd:0
    },
    textStyle: {
        fontSize: 12,
        padding: 0,
        margin:0
    },
})
export default Main;