import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import {h, w} from '../../utils/dimensions';
import {Saudation} from '../../@types/saudation';

const Header: React.FC = () => {
  const [saudation, setSaudation] = useState<Saudation>('Bom dia');
  const [profile, setProfile] = useState('https://github.com/octocat.png');

  const getSaudation = () => {
    const hour = new Date().getHours();
    if (hour > 12 && hour < 18) {
      setSaudation('Boa tarde');
    } else if (hour >= 18) {
      setSaudation('Boa noite');
    } else {
      setSaudation('Bom dia');
    }
  };
  const getProfileImg = () => {
    const profileImg = 'https://github.com/octocat.png';
    setProfile(profileImg);
  };

  useEffect(() => {
    getSaudation();
    getProfileImg();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View>
          <Text style={styles.saudation}>{saudation}, </Text>
          <Text style={styles.saudation}>Que bom te vê {} </Text>
        </View>
        <View style={styles.imgProfile}>
          <Image
            style={styles.imgProfile}
            source={{
              uri: profile,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: w,
    minHeight: h * 0.125,
    backgroundColor: '#008080',
    padding: 12,
    gap: 12,
    justifyContent: 'center',
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
