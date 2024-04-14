import React,{useState} from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RestaurantScreen from '../../component/RestaurantScreen';
import CookingScreen from '../../component/CookingScreen';
import { restaurantData } from '../../Data/data';
import colors from '../../Styles/colors';
import Imagepath from '../../constant/Imagepath';
import FilterModal from '../../component/Filtermodel';
const Tab = createMaterialTopTabNavigator();

const ScreenA = ({ navigation }) => {
  const [filter, setFilter] = useState(null); // State to manage the filter
  const [isModalVisible, setIsModalVisible] = useState(false); // State to manage the visibility of the modal

  const handleFilter = (filterType) => {
    setFilter(filterType); // Update the filter state when the filter icon is clicked
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
          {() => <RestaurantScreen filter={filter} />}
        </Tab.Screen>
        <Tab.Screen name="Cooking" component={CookingScreen} />
      </Tab.Navigator>
      <FilterModal isVisible={isModalVisible} onClose={handleCloseModal} />

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
