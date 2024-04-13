// RestaurantScreen.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { restaurantData } from '../Data/data';
import HorizontalScrollView from './HorizontalScrollView';
import colors from '../Styles/colors';

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
        <View key={index} style={{ marginBottom: 10,paddingBottom:20, backgroundColor: 'white',borderRadius:20 }}>
          {/* Header with content and "View All" button */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, }}>
            <Text style={{ fontSize: 20,color:colors.textcolor,fontWeight:"700",fontFamily:"Urbanist" }}>{item.content}</Text>
            <TouchableOpacity onPress={handleViewAll}>
              <Text style={{ fontSize: 18, color:colors.textcolor }}>View All</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 14,paddingHorizontal:10,fontWeight:"400",
          color:colors.smalltextcolr,lineHeight:14,}}>{item.custominfo}</Text>

          {/* Pass the array of items to HorizontalScrollView */}
          <HorizontalScrollView data={restaurantData} />
        </View>
      )})}
    </ScrollView>
  );
};

export default RestaurantScreen;
