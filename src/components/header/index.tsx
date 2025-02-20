import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TextInput, Image} from 'react-native';

import {h, w} from '../../utils/dimensions';

type Saudation = 'Bom dia' | 'Boa tarde' | 'Boa noite';
const Header: React.FC = () => {
  const [saudation, setSaudation] = useState<Saudation>('Bom dia');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour > 12 && hour < 18) {
      setSaudation('Boa tarde');
    } else if (hour >= 18) {
      setSaudation('Boa noite');
    } else {
      setSaudation('Bom dia');
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View>
          <Text style={styles.saudation}>{saudation}, </Text>
          <Text style={styles.saudation}>Que bom te vê Marta! </Text>
        </View>
        <View style={styles.imgProfile}>
          <Image
            style={styles.imgProfile}
            source={{
              uri: 'https://i.redd.it/im-cancer-free-v0-9as2syfd75v91.jpg?width=1440&format=pjpg&auto=webp&s=da5592aaa3ca5af5f946227a08d3ead001052285',
            }}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TextInput
          style={styles.input}
          placeholder="Procure a sua senha"
          placeholderTextColor={'#333'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: w,
    minHeight: h * 0.2,
    backgroundColor: '#008080',
    padding: 12,
    gap: 12,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  saudation: {fontSize: 24, color: '#fff', fontWeight: '700'},
  bottomContainer: {position: 'relative'},
  input: {
    width: '100%',
    minHeight: 45,
    backgroundColor: '#ececec',
    borderRadius: 5,
    fontSize: 18,
    color: '#222',
    paddingHorizontal: 12,
  },
  imgProfile: {
    height: 50,
    width: 50,
    borderRadius: 300,
  },
});
export {Header};
