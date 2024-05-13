import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import colors from '../Styles/colors';
import Imagepath from '../constant/Imagepath';

const Completelistscreen = ({ route }) => {
  const { data } = route.params; // Get the filtered data passed from the previous screen

  // State to manage saved items
  const [savedItems, setSavedItems] = useState([]);

  // Function to handle saving an item
  const handleSave = (id) => {
    // Check if the item is already saved
    if (!savedItems.includes(id)) {
      // Add the item to the saved items list
      setSavedItems([...savedItems, id]);
      // Perform any other action (e.g., save to database)
    }
  };

  // Function to handle marking an item as favorite
  const handleFavorite = (id) => {
    // Perform action to mark the item as favorite
    // This can include updating the item's data in the database
  };

  // Render item function for FlatList
  const renderItem = ({ item }) => (
    <View style={{ flex: 1, margin: 5 }}>
      {/* Image */}
      <Image source={{ uri: item.imageUrl }} style={{ width: '100%', height: 200, borderRadius: 10 }} />

      {/* Save button */}
      <TouchableOpacity onPress={() => handleSave(item.id)} style={{ position: 'absolute', top: 10, left: 10 }}>
        <Image source={savedItems.includes(item.id) ? Imagepath.bookmark  :Imagepath.save} style={{ width: 25, height: 25 }} />
      </TouchableOpacity>

      {/* Heart (Favorite) button */}
      <TouchableOpacity onPress={() => handleFavorite(item.id)} style={{ position: 'absolute', top: 10, right: 10 }}>
        <Image source={Imagepath.like} style={{ width: 25, height: 25 }} />
      </TouchableOpacity>

      {/* Restaurant name */}
      <Text numberOfLines={1} style={{ position: 'absolute', top: 150, left: 10, fontSize: 16, fontWeight: 'bold', color: 'white', width: '90%' }}>{item.name}</Text>

      {/* Veg/Non-Veg info */}
      <Text style={{ position: 'absolute', bottom: 10, left: 10, color: 'white' }}>
        {item.category} | {item.cuisins.length > 4 ? `${item.cuisins.substring(0, 5)}...` : item.cuisins} | Meat
      </Text>
    </View>
  );

  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      {/* FlatList to display the complete list of items */}
      <FlatList
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 5 }}
      />
    </View>
  );
};

export default Completelistscreen;
