import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../Styles/colors';

const BottomSheetModal = ({ isVisible, onClose, onApplyFilter }) => {
  if (!isVisible) return null;
  
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleApplyFilter = (filter) => {
    setSelectedFilter(filter);
  };

  const handleApplyAndClose = () => {
    onApplyFilter(selectedFilter);
    onClose();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.overlay} onPress={onClose} />

      <View style={styles.modal}>

        <Text style={styles.title}>Filters</Text>
        <View style={styles.line} />

        <View style={{ padding: 10 }}>

          <View style={styles.category}>
            <Text style={[styles.categoryTitle, styles.Dietcategory]}>Diet</Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity style={styles.option} onPress={() => handleApplyFilter('veg')}>
                <Text style={{ color: colors.textcolor }}>Vegetarian</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option} onPress={() => handleApplyFilter('Nonveg')}>
                <Text>Non-Vegetarian</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option} onPress={() => handleApplyFilter('vegan')}>
                <Text>Vegan</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Cuisines</Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity style={styles.option} onPress={() => handleApplyFilter('indian')}>
                <Text>Indian</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option} onPress={() => handleApplyFilter('mediterranean')}>
                <Text>Mediterranean</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.category, styles.proteincategory]}>
            <Text style={styles.categoryTitle}>Proteins</Text>
            <View style={{ flexDirection: "row", marginTop: 10, }}>
              <TouchableOpacity style={styles.option} onPress={() => handleApplyFilter('chicken')}>
                <Text>Chicken</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option} onPress={() => handleApplyFilter('beef')}>
                <Text>Beef</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onClose}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.applyButton]} onPress={handleApplyAndClose}>
            <Text style={[styles.buttonText, { color: colors.white }]}>Apply Filters</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.black,
    padding: 20
  },
  category: {
    marginBottom: 15,
  },
  proteincategory: {
    marginTop: 70,
    marginBottom: 140,
  },
  Dietcategory: {
    marginTop: 50,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black
  },
  option: {
    paddingVertical: 8,
    borderColor: colors.textcolor,
    borderWidth: 1,
    borderRadius: 22,
    paddingHorizontal: 10,
    marginHorizontal: 2,
  },
  line: {
    height: 1,
    backgroundColor: "#F0F0F0",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 20

  },
  applyButton: {
    backgroundColor: colors.textcolor,
    borderRadius: 10,
  },
  button: {
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.black,
    fontFamily: "Urbanist",
    fontSize: 18,
    fontWeight: "600"
  },
});

export default BottomSheetModal;
