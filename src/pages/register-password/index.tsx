import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../styles/colors';

export const RegisterPasswordPage: React.FC = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});
