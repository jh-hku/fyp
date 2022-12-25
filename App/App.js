import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login';
import Signup from './screens/signup';
import Home from './screens/Home';
import Risk from './screens/Risk';
import Genetics from './screens/Genetics';
import Community from './screens/Community';
import BotNavbar from './components/BotNavbar';
import User from './screens/User';
import HealthDetails from './screens/user-pages/HealthDetails';
import GeneticsData from './screens/user-pages/GeneticsData';

 
const Stack = createNativeStackNavigator();

 
export default function App() {
    return (
        <NavigationContainer> 
          <Stack.Navigator screenOptions={{ animation: 'none' }}>
            <Stack.Screen name="GeneticsData" component={GeneticsData} />
            <Stack.Screen name="Home" component={Home}  />
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup}  />
            <Stack.Screen name="Genetics" component={Genetics} />
            <Stack.Screen name="Risk" component={Risk}  />
            <Stack.Screen name="Community" component={Community} />
            <Stack.Screen name="HealthDetails" component={HealthDetails} />
          </Stack.Navigator>
          {/* <BotNavbar /> */}
        </NavigationContainer>
    );
};
