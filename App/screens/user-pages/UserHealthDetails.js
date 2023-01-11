import { Button } from '@rneui/base'
import { Image, ImageBackground, StyleSheet, Text, View, ScrollView, TextInput, TouchableHighlight } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';

const socioEconomicData = [
    { label: 'Rich', value: 'Rich' },
    { label: 'Upper Middle Class', value: 'Upper Middle Class' },
    { label: 'Lower Middle Class', value: 'Lower Middle Class' },
    { label: 'Poor', value: 'Poor' },
];

const dietData = [
    { label: 'No Restrictions', value: 'No Restrictions' },
    { label: 'Keto', value: 'Keto' },
    { label: 'Paleo', value: 'Paleo' },
    { label: 'Vegetarian', value: 'Vegetarian' },
    { label: 'Vegan', value: 'Vegan' },
    { label: 'Mediterranean', value: 'Mediterranean' },
    { label: 'Low Carb', value: 'Low Carb' },
    { label: 'No Sugar', value: 'No Sugar' },
];

const smokingData = [
    { label: 'Never', value: 'Never' },
    { label: 'Heavy', value: 'Heavy' },
    { label: 'Light', value: 'Light' },
];

const bloodPressureData = [
    { label: 'Normal', value: 'Normal' },
    { label: 'Elevated', value: 'Elevated' },
    { label: 'HBP Stage 1', value: 'HBP Stage 1' },
    { label: 'HBP Stage 2', value: 'HBP Stage 2' },
    { label: 'HBP Stage 3', value: 'HBP Stage 3' },
];

export default function UserDetails({ navigation: { goBack } }) {
    const [username, setUsername] = useState('johndoe')
    const [Password, setPassword] = useState('*********')
    const [firstName, setFirstName] = useState('John')
    const [lastName, setLastName] = useState('Doe')
    const [dateOfBirth, setDateOfBirth] = useState('1/1/2000')
    const [email, setEmail] = useState('johndoe@gmail.com')
    const [phoneNumber, setPhoneNumber] = useState('57671234')
    const [socioEconomic, setSocioEconomic] = useState('Upper Middle Class')
    const [diet, setDiet] = useState('Keto')
    const [smoking, setSmoking] = useState('Heavy')
    const [alcohol, setAlcohol] = useState('0.5')
    const [bloodPressure, setBloodPressure] = useState('Normal')

    return (
        <ScrollView
            style={styles.screenContainer}
            scrollable={true}
            hasSafeArea={false}
        >
            <Text style={{color: 'black', marginLeft: 35, marginRight: 35, marginTop: 15, marginBottom: 0, textAlign: 'justify', fontSize: 15}}> 
                Login Details
            </Text>
            <View style={styles.container} >
                {/* ----- Username Option ------ */}
                <TouchableHighlight style={styles.touchableFirst} >
                    <View style={styles.optionView}>
                        <Text style={styles.optionText}> Username </Text>
                        <TextInput style={styles.valueText} onChangeText={setUsername} value={username} />
                    </View>
                </TouchableHighlight>
                {/* ----- Password Option ------ */}
                <TouchableHighlight style={styles.touchable} >
                    <View style={styles.optionView}>
                        <Text style={styles.optionText}> Password </Text>
                        <TextInput style={styles.valueText} onChangeText={setPassword} value={Password} />
                    </View>
                </TouchableHighlight>
            </View>

          <Text style={{color: 'black', marginLeft: 35, marginRight: 35, marginTop: 15, marginBottom: 0, textAlign: 'justify', fontSize: 15}}> 
            User Details
          </Text>
          <View style={styles.container} >
                {/* ----- First Name Option ------ */}
                <TouchableHighlight style={styles.touchableFirst} >
                    <View style={styles.optionView}>
                        <Text style={styles.optionText}> First Name </Text>
                        <TextInput style={styles.valueText} onChangeText={setFirstName} value={firstName} />
                        {/* <Text style={styles.valueText}> 22 </Text> */}
                    </View>
                </TouchableHighlight>
                {/* ----- Last Name Option ------ */}
                <TouchableHighlight style={styles.touchable} >
                    <View style={styles.optionView}>
                        <Text style={styles.optionText}> Last Name </Text>
                        <TextInput style={styles.valueText} onChangeText={setLastName} value={lastName} />
                    </View>
                </TouchableHighlight>
                {/* ----- DOB Option ------ */}
                <TouchableHighlight style={styles.touchable} >
                    <View style={styles.optionView}>
                    <Text style={styles.optionText}> Date of Birth </Text>
                        <TextInput style={styles.valueText} onChangeText={setDateOfBirth} value={dateOfBirth} />
                        {/* <Text style={styles.valueText}> 180 </Text> */}
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.container} >
                {/* ----- Email Option ------ */}
                <TouchableHighlight style={styles.touchableFirst} >
                    <View style={styles.optionView}>
                    <Text style={styles.optionText}> E-mail </Text>
                        <TextInput style={styles.valueText} onChangeText={setEmail} value={email} />
                        {/* <Text style={styles.valueText}> 180 </Text> */}
                    </View>
                </TouchableHighlight>
                {/* ----- Phone Number Option ------ */}
                <TouchableHighlight style={styles.touchable} >
                    <View style={styles.optionView}>
                    <Text style={styles.optionText}> Phone Number </Text>
                        <TextInput style={styles.valueText} onChangeText={setPhoneNumber} value={phoneNumber} />
                        {/* <Text style={styles.valueText}> 180 </Text> */}
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.container} >
                {/* ----- Socio-Economic Option ------ */}
                <TouchableHighlight style={styles.touchableFirst} >
                    <View style={styles.optionView}>
                        <Text style={styles.optionText}> Socio-Economic Status </Text>
                        <Text style={styles.valueTextWithDropdown}> {socioEconomic} </Text>
                        <Dropdown 
                            style={styles.dropdown} 
                            selectedTextStyle={styles.selectedTextStyle}
                            placeholder=""
                            data={socioEconomicData}
                            labelField="label"
                            valueField="value"
                            onChange={item => {
                                console.log(item.value)
                                setSocioEconomic(item.value)
                            }}
                        />
                    </View>
                </TouchableHighlight>
            </View>

            <Text style={{color: 'black', marginLeft: 35, marginRight: 35, marginTop: 20, marginBottom: 0, textAlign: 'justify', fontSize: 15}}> 
                Health Details
            </Text>
            <View style={styles.container} >
                {/* ----- Diet Option ------ */}
                <TouchableHighlight style={styles.touchableFirst} >
                    <View style={styles.optionView}>
                        <Text style={styles.optionText}> Diet </Text>
                        <Text style={styles.valueTextWithDropdown}> {diet} </Text>
                        <Dropdown 
                            style={styles.dropdown} 
                            selectedTextStyle={styles.selectedTextStyle}
                            placeholder=""
                            data={dietData}
                            labelField="label"
                            valueField="value"
                            onChange={item => {
                                console.log(item.value)
                                setDiet(item.value)
                            }}
                        />
                    </View>
                </TouchableHighlight>
                {/* ----- Smoking Option ------ */}
                <TouchableHighlight style={styles.touchable} >
                    <View style={styles.optionView}>
                        <Text style={styles.optionText}> Smoking </Text>
                        <Text style={styles.valueTextWithDropdown}> {smoking} </Text>
                        <Dropdown 
                            style={styles.dropdown} 
                            selectedTextStyle={styles.selectedTextStyle}
                            placeholder=""
                            data={smokingData}
                            labelField="label"
                            valueField="value"
                            onChange={item => {
                                console.log(item.value)
                                setSmoking(item.value)
                            }}
                        />
                    </View>
                </TouchableHighlight>
                {/* ----- Alcohol Consumption Option ------ */}
                <TouchableHighlight style={styles.touchable} >
                    <View style={styles.optionView}>
                        <Text style={styles.optionText}> Alcohol Consumption/L </Text>
                        <TextInput style={styles.valueText} onChangeText={setAlcohol} value={alcohol} />
                        {/* <Text style={styles.valueText}> 180 </Text> */}
                    </View>
                </TouchableHighlight>
                {/* ----- Blood Pressure Option ------ */}
                <TouchableHighlight style={styles.touchable} >
                    <View style={styles.optionView}>
                        <Text style={styles.optionText}> Blood Pressure </Text>
                        <Text style={styles.valueTextWithDropdown}> {bloodPressure} </Text>
                        <Dropdown 
                            style={styles.dropdown} 
                            selectedTextStyle={styles.selectedTextStyle}
                            placeholder=""
                            data={bloodPressureData}
                            labelField="label"
                            valueField="value"
                            onChange={item => {
                                console.log(item.value)
                                setBloodPressure(item.value)
                            }}
                        />
                    </View>
                </TouchableHighlight>
            </View>
        </ScrollView>
    
      );
}

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: '#DDDDDF',
        // alignItems: 'center',
        height: '100%',
        // paddingTop: 20,
        // marginTop: -65,
    },

    container: {
        backgroundColor: '#FFFFFF',
        // marginHorizontal: 30,
        width: '85%',
        borderRadius: 13,
        marginTop: 15,
        marginBottom: 10,
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