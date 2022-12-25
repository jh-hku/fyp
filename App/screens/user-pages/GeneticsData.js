import { Button } from '@rneui/base'
import { Container, Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, ImageBackground, StyleSheet, Text, View, TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';

const sexData = [
    { label: 'M', value: 'M' },
    { label: 'F', value: 'F' },
];

const bloodData = [
    { label: 'A+', value: 'A+' },
    { label: 'A-', value: 'A-' },
    { label: 'B+', value: 'B+' },
    { label: 'B-', value: 'B-' },
    { label: 'AB+', value: 'AB+' },
    { label: 'AB-', value: 'AB-' },
    { label: 'O+', value: 'O+' },
    { label: 'O-', value: 'O-' },
]

export default function GeneticsData({ navigation: { goBack } }) {
    const [sexValue, setSexValue] = useState('M')
    const [bloodtypeValue, setBloodtypeValue] = useState('O+')
    const [ageValue, setAgeValue] = useState('22')
    const [heightValue, setHeightValue] = useState('180')
    const [weightValue, setWeightValue] = useState('75')

    // sexDropdownHandler(item) = () => {

    // }

    return (
        <View
            style={styles.screenContainer}
            scrollable={true}
            hasSafeArea={false}
        >
            <Text>Genetics Data</Text>
            <Container style={styles.container} >
                {/* ----- Age Option ------ */}
                <Touchable style={styles.touchableFirst} >
                    <View style={styles.optionView}>
                        <Text style={styles.optionText}> Age </Text>
                        <TextInput style={styles.valueText} onChangeText={setAgeValue} value={ageValue} />
                        {/* <Text style={styles.valueText}> 22 </Text> */}
                    </View>
                </Touchable>
                {/* ----- Sex Option ------ */}
                <Touchable style={styles.touchable} >
                    <View style={styles.optionView}>
                        <Text style={styles.optionText}> Sex </Text>
                        <Text style={styles.valueTextWithDropdown}> {sexValue} </Text>
                        <Dropdown 
                            style={styles.dropdown} 
                            selectedTextStyle={styles.selectedTextStyle}
                            placeholder=""
                            data={sexData}
                            labelField="label"
                            valueField="value"
                            onChange={item => {
                                console.log(item.value)
                                setSexValue(item.value)
                            }}
                        />
                    </View>
                </Touchable>
                {/* ----- Height Option ------ */}
                <Touchable style={styles.touchable} >
                    <View style={styles.optionView}>
                        <Text style={styles.optionText}> Height </Text>
                        <TextInput style={styles.valueText} onChangeText={setHeightValue} value={heightValue} />
                        {/* <Text style={styles.valueText}> 180 </Text> */}
                    </View>
                </Touchable>
                {/* ----- Weight Option ------ */}
                <Touchable style={styles.touchable} >
                    <View style={styles.optionView}>
                        <Text style={styles.optionText}> Weight </Text>
                        <TextInput style={styles.valueText} onChangeText={setWeightValue} value={weightValue} />
                    </View>
                </Touchable>
                {/* ----- Blood Type Option ------ */}
                <Touchable style={styles.touchable} >
                    <View style={styles.optionView}>
                        <Text style={styles.optionText}> Blood Type </Text>
                        <Text style={styles.valueTextWithDropdown}> {bloodtypeValue} </Text>
                        <Dropdown 
                            style={styles.dropdown} 
                            selectedTextStyle={styles.selectedTextStyle}
                            placeholder=""
                            data={bloodData}
                            labelField="label"
                            valueField="value"
                            onChange={item => {
                                console.log(item)
                                setBloodtypeValue(item.value)
                            }}
                        />
                    </View>
                </Touchable>
            </Container>

            <Text style={{color: 'grey', marginLeft: 35, marginRight: 35, marginTop: 20, marginBottom: 0, textAlign: 'justify'}}> 
                BMI is calculated from the inputted height and weight above, make sure that the data inputted above is correct so that your BMI measurement is also accurate.
            </Text>
            <Container style={styles.container} >
                {/* ----------- */}
                <Touchable style={styles.touchableFirst} >
                    <View style={styles.optionView}>
                        <Text style={styles.optionText}> BMI </Text>
                        <Text style={styles.valueText}> 24.5 </Text>
                    </View>
                </Touchable>
            </Container>
        </View>
    
      );
}

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: '#DDDDD',
        // alignItems: 'center',
        height: '100%'
        // marginTop: -65,
    },

    container: {
        backgroundColor: '#FFFFFF',
        // marginHorizontal: 30,
        width: '85%',
        borderRadius: 13,
        // marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 10,
        paddingRight: 10
    },

    touchableFirst: {
        borderTopWidth: 0,
        paddingTop: 12,
        paddingBottom: 12,
        // marginTop: 32,
        borderColor: '#bdbdbd'
    },

    touchable: {
        paddingBottom: 12,
        paddingTop: 12,
        borderTopWidth: 1,
        borderColor: '#bdbdbd'
    },

    optionView: {
        position: 'relative',
    },
    
    dropdown: {
        top: -9,
        right: 0,
        height: 0,
        // width: 5
        // bottom: -7,
        // transform: [{ rotate: "-90deg" }]
    },

    valueTextWithDropdown: {
        position: 'absolute',
        right: 20,
        color: '#263cff'
    },

    valueText: {
        position: 'absolute',
        top: -4,
        right: 0,
        color: '#263cff'
    },
    
    selectedTextStyle: {
        opacity: 0
    }
})