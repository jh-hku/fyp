import { Button } from '@rneui/base'
import { Image, ImageBackground, StyleSheet, Text, View, ScrollView, TextInput, TouchableHighlight } from 'react-native';
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
        <ScrollView
            style={styles.screenContainer}
            scrollable={true}
            hasSafeArea={false}
        >
            {/* <Text>Genetics Data</Text> */}
            <View style={styles.container} >
                {/* ----- Age Option ------ */}
                <TouchableHighlight style={styles.touchableFirst} >
                    <View style={styles.optionView}>
                        <Text style={styles.optionText}> Age </Text>
                        <TextInput style={styles.valueText} onChangeText={setAgeValue} value={ageValue} />
                        {/* <Text style={styles.valueText}> 22 </Text> */}
                    </View>
                </TouchableHighlight>
                {/* ----- Sex Option ------ */}
                <TouchableHighlight style={styles.touchable} >
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
                </TouchableHighlight>
                {/* ----- Height Option ------ */}
                <TouchableHighlight style={styles.touchable} >
                    <View style={styles.optionView}>
                        <Text style={styles.optionText}> Height </Text>
                        <TextInput style={styles.valueText} onChangeText={setHeightValue} value={heightValue} />
                        {/* <Text style={styles.valueText}> 180 </Text> */}
                    </View>
                </TouchableHighlight>
                {/* ----- Weight Option ------ */}
                <TouchableHighlight style={styles.touchable} >
                    <View style={styles.optionView}>
                        <Text style={styles.optionText}> Weight </Text>
                        <TextInput style={styles.valueText} onChangeText={setWeightValue} value={weightValue} />
                    </View>
                </TouchableHighlight>
                {/* ----- Blood Type Option ------ */}
                <TouchableHighlight style={styles.touchable} >
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
                </TouchableHighlight>
            </View>

            <Text style={{color: 'grey', marginLeft: 35, marginRight: 35, marginTop: 20, marginBottom: 0, textAlign: 'justify'}}> 
                BMI is calculated from the inputted height and weight above, make sure that the data inputted above is correct so that your BMI measurement is also accurate.
            </Text>
            <View style={styles.container} >
                {/* ----------- */}
                <TouchableHighlight style={styles.touchableFirst} >
                    <View style={styles.optionView}>
                        <Text style={styles.optionText}> BMI </Text>
                        <Text style={styles.valueText}> 24.5 </Text>
                    </View>
                </TouchableHighlight>
            </View>
        </ScrollView>
    
      );
}

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: '#DDDDD',
        // alignItems: 'center',
        height: '100%',
        paddingTop: 20,
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
        paddingLeft: 20,
        paddingRight: 20
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