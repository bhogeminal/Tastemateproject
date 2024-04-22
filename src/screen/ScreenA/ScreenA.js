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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filteredData, setFilteredData] = useState(restaurantData);

  const handleFilter = (filterType) => {
    setSelectedFilter(filterType);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleApplyFilter = (filter) => {
    setSelectedFilter(filter);
    const filtered = restaurantData.filter(item => {
      if (filter === 'veg') {
        return item.category.toLowerCase() === 'veg';
      } else if (filter === 'nonveg') {
        return item.category.toLowerCase() === 'nonveg';
      } else if (filter === 'vegan') {
        return item.category.toLowerCase() === 'vegan';
      }
      else if (filter === 'Indian') {
        return item.category.toLowerCase() === 'Indian';
      }
      // Handle other filters if needed
    });
    setFilteredData(filtered);
    navigation.navigate('ScreenA', { filteredData: filtered });
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
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: styles.tabBar
        })}
      >
        <Tab.Screen name="Restaurants">
          {() => <RestaurantScreen filter={selectedFilter} restaurantData={filteredData} />}
        </Tab.Screen>
        <Tab.Screen name="Cooking" component={CookingScreen} />
      </Tab.Navigator>
      <BottomSheetModal isVisible={isModalVisible} onClose={handleCloseModal} onApplyFilter={handleApplyFilter} />
    </View>
  );
};

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
