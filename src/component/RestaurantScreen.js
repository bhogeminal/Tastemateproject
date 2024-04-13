// RestaurantScreen.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { restaurantData } from '../Data/data';
import HorizontalScrollView from './HorizontalScrollView';

const RestaurantScreen = () => {
  const data = restaurantData; // Your restaurant data

  // Dummy function for handling press on "View All" button
  const handleViewAll = () => {
    // Navigate to Screen B or handle the action accordingly
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      {/* Render 5 horizontal scroll views */}
      {data.map((item, index) => {
        console.log(item)
        return(
        <View key={index} style={{ marginBottom: 20, backgroundColor: 'white' }}>
          {/* Header with content and "View All" button */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
            <Text style={{ fontSize: 18 }}>{item.content}</Text>
            <TouchableOpacity onPress={handleViewAll}>
              <Text style={{ fontSize: 16, color: 'blue' }}>View All</Text>
            </TouchableOpacity>
          </View>
          {/* Pass the array of items to HorizontalScrollView */}
          <HorizontalScrollView data={restaurantData} />
        </View>
      )})}
    </ScrollView>
  );
};

export default RestaurantScreen;
