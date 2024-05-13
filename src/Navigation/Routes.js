import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenA from '../screen/ScreenA/ScreenA';
import ScreenB from '../screen/ScreenB/ScreenB';
import Completelistscreen from '../screen/Completelistcreen';
const Stack = createNativeStackNavigator();

const Routes = () => {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="ScreenA" component={ScreenA} options={{ headerShown: false }} />
            <Stack.Screen name="ScreenB" component={ScreenB} />
            <Stack.Screen name="Completelistscreen" component={Completelistscreen} />

          </Stack.Navigator>
        </NavigationContainer>
      );
    };
    
    
  


export default Routes

const styles = StyleSheet.create({})