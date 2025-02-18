import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const MyApp: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem vindo de volta</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 23,
    fontWeight: '500',
  },
});
