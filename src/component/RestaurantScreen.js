// RestaurantScreen.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { restaurantData } from '../Data/data';
import HorizontalScrollView from './HorizontalScrollView';
import colors from '../Styles/colors';
import { useNavigation } from '@react-navigation/native'
const RestaurantScreen = ({ filter }) => {
  const navigation = useNavigation(); // Get navigation object

  // Filter the data based on the selected filter
const filteredData = filter ? restaurantData.filter(item => 
    item.category.toLowerCase() === filter.toLowerCase() || 
    item.cuisins.toLowerCase() === filter.toLowerCase()
) : restaurantData;
const handleViewAll = () => {
  // Navigate to Screen B or handle the action accordingly
  navigation.navigate('Completelistscreen', { data: filteredData });
};

  return (
    <ScrollView style={{ flex: 1 }}>
      {/* Render 5 horizontal scroll views */}
      {filteredData.map((item, index) => (
        <View key={index} style={{ marginBottom: 10, paddingBottom: 20, backgroundColor: 'white', borderRadius: 20 }}>
          {/* Header with content and "View All" button */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
            <Text style={{ fontSize: 20, color: colors.textcolor, fontWeight: "700", fontFamily: "Urbanist" }}>{item.content}</Text>
            <TouchableOpacity onPress={handleViewAll}>
              <Text style={{ fontSize: 18, color: colors.textcolor }}>View All</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 14, paddingHorizontal: 10, fontWeight: "400", color: colors.smalltextcolr, lineHeight: 14, }}>{item.custominfo}</Text>

          {/* Pass the array of items to HorizontalScrollView */}
          <HorizontalScrollView data={filteredData} />
          
        </View>
      ))}
    </ScrollView>
  );
};

export default RestaurantScreen;