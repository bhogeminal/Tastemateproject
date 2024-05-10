// HorizontalScrollView.js
import React from 'react';
import { ScrollView, FlatList, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import Imagepath from '../constant/Imagepath';


const HorizontalScrollView = ({ data }) => {
  // Dummy function for handling press on "Save" button
  const handleSave = () => {
    // Save the restaurant or handle the action accordingly
  };

  // Dummy function for handling press on "Favorite" button
  const handleFavorite = () => {
    // Mark the restaurant as favorite or handle the action accordingly
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <View style={{ width: 160, marginLeft: 8, marginTop: 30 }}>
            {/* Image */}
            <Image source={{ uri: item.imageUrl }} style={{ width: '100%', height: 200, borderRadius: 10 }} />

            {/* Save button */}
            <TouchableOpacity onPress={handleSave} style={{ position: 'absolute', top: 10, left: 10 }}>
              <Image source={Imagepath.save} style={{ width: 25, height: 25 }} />
            </TouchableOpacity>

            {/* Heart (Favorite) button */}
            <TouchableOpacity onPress={handleFavorite} style={{ position: 'absolute', top: 10, right: 10 }}>
              <Image source={Imagepath.like} style={{ width: 25, height: 25 }} />
            </TouchableOpacity>

            {/* Restaurant name */}
            <Text numberOfLines={1} style={{ position: 'absolute', top: 150, left: 10, fontSize: 16, fontWeight: 'bold', color: 'white', width: '90%' }}>{item.name}</Text>

            {/* Veg/Non-Veg info */}
            <Text style={{ position: 'absolute', bottom: 10, left: 10, color: 'white' }}>
              {item.category} | {item.cuisins.length > 4 ? `${item.cuisins.substring(0, 5)}...` : item.cuisins} | Meat
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </ScrollView>
  );
};

export default HorizontalScrollView;
