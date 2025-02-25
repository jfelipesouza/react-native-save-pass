import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PasswordItemProps} from '../../@types/passwordSection';

export const PasswordItem: React.FC<PasswordItemProps> = ({index, item}) => {
  const handleSelect = () => {
    Alert.alert('Sua senha', item.password);
  };
  return (
    <View style={styles.selectItemContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.selectItem}
        onPress={handleSelect}>
        <Text style={styles.itemText} key={index + item.id}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  selectItem: {
    backgroundColor: '#d0d0d0ab',
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  selectItemContainer: {
    borderLeftColor: '#414141',
    borderLeftWidth: 2,
    paddingLeft: 10,
    paddingVertical: 12,
    width: '99%',
    alignSelf: 'flex-end',
  },
  itemText: {
    fontSize: 15,
    color: '#222',
    fontWeight: '700',
  },
});
