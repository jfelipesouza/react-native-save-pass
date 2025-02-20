import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SectionHeaderComponentProps} from '../../@types/passwordSection';

export const SectionHeaderComponent: React.FC<SectionHeaderComponentProps> = ({
  title,
}) => <Text style={styles.title}> {title}</Text>;

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    fontSize: 22,
    marginBottom: 12,
  },
});
