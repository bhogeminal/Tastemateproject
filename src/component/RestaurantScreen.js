import React, { useState } from 'react';
import { View, Text,Image } from 'react-native';
import Swiper from 'react-native-swiper';
import ItemCard from './Itemcard';
import { restaurantData } from '../Data/data';
console.log(restaurantData)
const RestaurantScreen = ({ restaurantData }) => {
  return (
    <Swiper>
     {restaurantData && restaurantData.map((restaurant, index) => (
        <View key={index}>
          <Image source={{ uri: restaurant.imageUrl }} style={{ width: '100%', height: 200 }} />
          <Text>{restaurant.name}</Text>
          <Text>{restaurant.category}</Text>
        </View>
      ))}
    </Swiper>
  );
};
export default RestaurantScreen;
