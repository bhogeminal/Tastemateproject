import React from 'react';
import { View, Text, TextInput, StyleSheet, Button,Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for vector icons
import RestaurantScreen from '../../component/RestaurantScreen';
import CookingScreen from '../../component/CookingScreen';
import { restaurantData } from '../../Data/data';
import colors from '../../Styles/colors';
const Tab = createMaterialTopTabNavigator();

const ScreenA = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello Jordan Joe</Text>
      <View style={styles.searchContainer}>
        {/* <Ionicons name="ios-filter" size={24} color="black" style={styles.filterIcon} /> */}
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabelStyle: styles.tabLabel,
          tabBarActiveTintColor: 'blue', // Change the text color of the active tab
          tabBarInactiveTintColor: 'gray', // Change the text color of inactive tabs
          tabBarStyle: styles.tabBar // Remove the background color of the tab bar
        })}
      >
        {/* Pass restaurantData as prop to RestaurantScreen */}
        <Tab.Screen name="Restaurants">
          {() => <RestaurantScreen />}
        </Tab.Screen>
        <Tab.Screen name="Cooking" component={CookingScreen} />
      </Tab.Navigator>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor:colors.background
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabBar: {
    backgroundColor: 'transparent',
  },
});

export default ScreenA;
