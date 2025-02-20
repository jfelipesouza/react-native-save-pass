import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {h, w} from '../../utils/dimensions';

export const AddButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.icon}>Add</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    width: 50,
    height: 50,
    bottom: h * 0.05,
    right: w * 0.05,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    elevation: 2,
    zIndex: 99,
  },
  icon: {color: 'white'},
});
