// HorizontalScrollView.js
import React from 'react';
import { ScrollView, FlatList, View, Text, Image, TouchableOpacity } from 'react-native';

const HorizontalScrollView = ({ data }) => {
    console.log("data,,,",data)
  // Dummy function for handling press on "Save" button
  const handleSave = () => {
    // Save the restaurant or handle the action accordingly
  };

  // Dummy function for handling press on "Favorite" button
  const handleFavorite = () => {
    // Mark the restaurant as favorite or handle the action accordingly
  };

  return (
    <ScrollView  showsHorizontalScrollIndicator={false}>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => {
            console.log("item",item)
return(
          <View style={{ margin: 10,backgroundColor:"red" }}>
            {/* Restaurant name */}
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>

            {/* Heart (Favorite) button */}
            <TouchableOpacity onPress={handleFavorite} style={{ position: 'absolute', top: 10, right: 10 }}>
              {/* Your heart icon */}
            </TouchableOpacity>

            {/* Image */}
            <Image source={{ uri: item.imageUrl }} style={{ width: 150, height: 150, borderRadius: 10 }} />

            {/* Save button */}
            <TouchableOpacity onPress={handleSave} style={{ position: 'absolute', bottom: 10, left: 10 }}>
              <Text style={{ color: 'blue' }}>Save</Text>
            </TouchableOpacity>

            {/* Veg/Non-Veg info */}
            <Text>{item.veg ? 'Veg' : 'Non-Veg'}</Text>
          </View>
        )}}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
)
};

export default HorizontalScrollView;
