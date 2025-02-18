import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {Header} from './components/header';

export const MyApp: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'trasnparent'} hidden />
      <Header />

      <Text style={styles.title}> Minhas Senhas</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 15,
  },
  text: {
    fontSize: 23,
    fontWeight: '500',
  },
  title: {
    marginLeft: 15,
    fontWeight: '600',
    fontSize: 18,
  },
});
