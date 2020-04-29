import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SigninScreen from './src/signinScreen';
import SignupScreen from './src/signupScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Signup">
       <Stack.Screen name="Signin" component={SigninScreen} options={{headerShown:false}}/>
       <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown:false}}/>
     </Stack.Navigator>

   </NavigationContainer>
    // <SignupScreen/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
