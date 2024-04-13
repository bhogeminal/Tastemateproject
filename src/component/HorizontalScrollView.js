// HorizontalScrollView.js
import React from 'react';
import { ScrollView, FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
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
    <ScrollView  showsHorizontalScrollIndicator={false}>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <View style={{ margin: 10 }}>
            {/* Restaurant name */}
            {/* <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5, position: 'absolute', top: 10, left: 10 }}>{item.name}</Text> */}

            {/* Veg/Non-Veg info */}
            <Text style={{ position: 'absolute', top: 30, left: 10 }}>{item.isVeg ? 'Veg' : 'Non-Veg'}</Text>

            {/* Save button */}
            <TouchableOpacity onPress={handleSave} style={{ position: 'absolute', top: 10, right: 10 }}>
              <Text style={{ color: 'blue' }}>Save</Text>
            </TouchableOpacity>

            {/* Heart (Favorite) button */}
            <TouchableOpacity onPress={handleFavorite} style={{  }}>
            <Image source={Imagepath.like} style={{width:40,height:40, top: 10, right: 40}}/>
            </TouchableOpacity>

            {/* Image */}
            <Image source={{ uri: item.imageUrl }} style={{ width: 150, height: 150, borderRadius: 10 }} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

export default HorizontalScrollView;
