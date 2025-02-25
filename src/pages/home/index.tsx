import React, {useState} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {Header} from '../../components/header';
import {PasswordsSection} from '../../components/password-section';
import {AddButton} from '../../components/addButton';
import {getAllPasswords} from '../../services/databases/watermelon/functions';

export const HomePage = () => {
  const [section, setSection] = useState<any>(null);

  const load = async () => {
    const grouped = await getAllPasswords();
    const formattedSections = Object.keys(grouped)
      .map(letter => ({
        title: letter,
        data: grouped[letter],
      }))
      .sort((a, b) => a.title.localeCompare(b.title));
    setSection(formattedSections);
  };

  useFocusEffect(
    React.useCallback(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let isActive = true;
      load();
      return () => {
        isActive = false;
      };
    }, []),
  );

  if (!section) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <PasswordsSection sections={section} />
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
