import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../Styles/colors';
const BottomSheetModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.overlay} onPress={onClose} />
      <View style={styles.modal}>
        <Text style={styles.title}>Filter Options</Text>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>Diet:</Text>
          <TouchableOpacity style={styles.option} onPress={() => console.log('Veg')}>
            <Text>Veg</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => console.log('Non-Veg')}>
            <Text>Non-Veg</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => console.log('Vegan')}>
            <Text>Vegan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>Cuisines:</Text>
          <TouchableOpacity style={styles.option} onPress={() => console.log('Indian')}>
            <Text>Indian</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => console.log('Mediterranean')}>
            <Text>Mediterranean</Text>
          </TouchableOpacity>
          {/* Add more cuisine options as needed */}
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>Proteins:</Text>
          <TouchableOpacity style={styles.option} onPress={() => console.log('Chicken')}>
            <Text>Chicken</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => console.log('Beef')}>
            <Text>Beef</Text>
          </TouchableOpacity>
          {/* Add more protein options as needed */}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onClose}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.applyButton]}>
            <Text style={[styles.buttonText, { color: colors.white }]}>Apply Filter</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  category: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  option: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  closeButtonText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  applyButton: {
    backgroundColor: colors.textcolor, // Change to the desired color
    borderRadius:10
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default BottomSheetModal;
