import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RestaurantScreen from '../../component/RestaurantScreen';
import CookingScreen from '../../component/CookingScreen';
import { restaurantData } from '../../Data/data';
import colors from '../../Styles/colors';
import Imagepath from '../../constant/Imagepath';

const Tab = createMaterialTopTabNavigator();

const ScreenA = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Good Morning Mr.Joe!</Text>
      <View style={styles.searchContainer}>
        <Image source={Imagepath.searchnormal} />
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.filterIconContainer}>
        <Image source={Imagepath.Vector} style={{height:20,width:20}}/>

        </TouchableOpacity>
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
    backgroundColor: colors.background
  },
  greeting: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: "Urbanist",
    marginBottom: 10,
    width: 140,
    color: colors.textcolor
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.gray,
    paddingHorizontal: 10,
    backgroundColor:colors.white

  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  filterIconContainer: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: 'lightgray',
  },
  filterIcon: {
    marginRight: 5,
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
