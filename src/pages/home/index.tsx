import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Header} from '../../components/header';
import {PasswordsSection} from '../../components/password-section';
import {AddButton} from '../../components/addButton';

export const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <PasswordsSection
        sections={[
          {
            title: 'A',
            data: ['Amazon', 'Amazon Prime Video'],
          },
          {
            title: 'B',
            data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
          },
          {
            title: 'C',
            data: ['Water', 'Coke', 'Beer'],
          },
          {
            title: 'D',
            data: ['Cheese Cake', 'Ice Cream'],
          },
        ]}
      />
      <AddButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
