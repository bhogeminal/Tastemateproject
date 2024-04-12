import React from 'react';
import { View, Text, TextInput ,Button} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for vector icons
import RestaurantScreen from '../../component/RestaurantScreen';
import CookingScreen from '../../component/CookingScreen';

const Tab = createMaterialTopTabNavigator();

const ScreenA = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <Text>Hello Jordan Joe</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        {/* Filter icon here */}
        {/* <Ionicons name="ios-filter" size={24} color="black" style={{ marginRight: 10 }} /> */}
        {/* Search bar here */}
        <TextInput style={{ flex: 1, borderWidth: 1, padding: 5 }} placeholder="Search" />
      </View>
      <Tab.Navigator
        screenOptions={{
          labelStyle: { fontSize: 16, fontWeight: 'bold' },
          activeTintColor: 'blue', // Change the text color of the active tab
          inactiveTintColor: 'gray', // Change the text color of inactive tabs
          style: { backgroundColor: 'white' } // Change the background color of the tab bar
        }}
      >
        <Tab.Screen name="Restaurants" component={RestaurantScreen} />
        <Tab.Screen name="Cooking" component={CookingScreen} />
      </Tab.Navigator>
      <Button title="View All" onPress={() => navigation.navigate('ScreenB')} />
    </View>
  );
};

export default ScreenA;
