import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Swiper from 'react-native-swiper';
import { restaurantData } from '../Data/data';
import ItemCard from './Itemcard';
const RestaurantScreen = () => {
  const [filteredData, setFilteredData] = useState(restaurantData); // Initialize with all data

  // Function to filter data based on specific properties
  const filterData = (property) => {
    // Filter data based on the provided property
    const filtered = restaurantData.filter(item => item[property]);
    setFilteredData(filtered);
  };

  // Render item for carousel
  const renderItem = (item) => {
    console.log(item)
    return (
      <View>
        <ItemCard item={item} />
        <Text>{item.restaurantName}</Text>
        <Text>{item.category}</Text>
      </View>
    );
  };
  return (
    <View>
      {/* Display filter options */}
      {/* For example, buttons to filter by vegetarian, vegan, gluten-free, etc. */}
      {/* Example: */}
      <Button title="Vegetarian" onPress={() => filterData('isVeg')} />
      <Button title="Non-Vegetarian" onPress={() => filterData('isNonVeg')} />
      {/* Add more buttons for other filtering options */}

      {/* Display carousel with filtered item cards */}
      <Swiper showsButtons autoplay>
        {filteredData ?.map(item => (
          <View key={item.id}>
            {renderItem(item)}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default RestaurantScreen;
