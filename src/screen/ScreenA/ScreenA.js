import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RestaurantScreen from '../../component/RestaurantScreen';
import CookingScreen from '../../component/CookingScreen';
import { restaurantData } from '../../Data/data';
import colors from '../../Styles/colors';
import Imagepath from '../../constant/Imagepath';
import BottomSheetModal from '../../component/BottomSheetModal'; // Import the BottomSheetModal component

const Tab = createMaterialTopTabNavigator();

const ScreenA = ({ navigation }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false); // State to manage the visibility of the modal

  const handleFilter = (filterType) => {
    setSelectedFilter(filterType); // Update the filter state when the filter icon is clicked
    setIsModalVisible(true); // Show the modal when the filter icon is clicked
  };

  const handleCloseModal = () => {
    setIsModalVisible(false); // Hide the modal when the close button is clicked
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Good Morning Mr.Joe!</Text>
      <View style={styles.searchContainer}>
        <Image source={Imagepath.searchnormal} />
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.filterIconContainer} onPress={() => handleFilter('veg')}>
          <Image source={Imagepath.Vector} style={{ height: 20, width: 20 }} />
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
        {() => <RestaurantScreen filter={selectedFilter} restaurantData={restaurantData} />}
        </Tab.Screen>
        <Tab.Screen name="Cooking" component={CookingScreen} />
      </Tab.Navigator>
      <BottomSheetModal isVisible={isModalVisible} onClose={handleCloseModal}>
        {/* Add your filter options or content here */}
        <Text>Filter Options</Text>
        <TouchableOpacity onPress={handleCloseModal}>
          <Text>Close</Text>
        </TouchableOpacity>
      </BottomSheetModal>
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
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.gray,
    paddingHorizontal: 10,
    backgroundColor: colors.white
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  filterIconContainer: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: 'lightgray',
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
