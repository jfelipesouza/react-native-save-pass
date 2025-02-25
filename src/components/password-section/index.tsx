import React from 'react';
import {SectionList, StyleSheet, Text} from 'react-native';

import {SectionHeaderComponent} from './section-header';
import {PasswordItem} from './password-item';
import {PasswordsSectionProps} from '../../@types/passwordSection';

export const PasswordsSection: React.FC<PasswordsSectionProps> = ({
  sections,
}) => {
  return (
    <SectionList
      sections={sections}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.sectionTitle}>{title}</Text>
      )}
      renderItem={({item, index}) => <PasswordItem index={index} item={item} />}
      ListHeaderComponent={
        <SectionHeaderComponent title={'Veja suas senhas'} />
      }
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
  },
  contentContainer: {
    padding: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
});
