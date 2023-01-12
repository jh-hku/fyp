import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login';
import Signup from './screens/signup';
import Main from './screens/Main';
import Home from './screens/Home';
import Risk from './screens/Risk';
import User from './screens/User';
import Genetics from './screens/Genetics';
import Community from './screens/Community';
import UserDetails from './screens/user-pages/UserHealthDetails';
import GeneticsData from './screens/user-pages/GeneticsData';
// import BotNavbar from './components/BotNavbar';

 
const Stack = createNativeStackNavigator();
 
export default function App() {
    return (
        <NavigationContainer> 
          <Stack.Navigator screenOptions={{ animation: 'none' }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup}  />
            <Stack.Screen name="Main" component={Main}  />
            <Stack.Screen name="Home" component={Home}  />
            <Stack.Screen name="Risk" component={Risk}  />
            <Stack.Screen name="Genetics" component={Genetics} />
            <Stack.Screen name="Community" component={Community} />
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="User & Health Details" component={UserDetails} />
            <Stack.Screen name="Genetics Data" component={GeneticsData} />
          </Stack.Navigator>
          {/* <BotNavbar /> */}
        </NavigationContainer>
    );
};
