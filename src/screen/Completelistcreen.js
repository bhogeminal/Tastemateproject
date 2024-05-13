import React from 'react';
import { View, Text, FlatList } from 'react-native';

const Completelistscreen = ({ route }) => {
  const { data } = route.params; // Get the filtered data passed from the previous screen

  // Render item function for FlatList
  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.name}</Text> 
    </View>
  );

  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      {/* FlatList to display the complete list of items */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Completelistscreen;
