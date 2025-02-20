import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Plus} from 'lucide-react-native';
import {h, w} from '../../utils/dimensions';

export const AddButton: React.FC = () => {
  const navigation = useNavigation();

  const goToRegisterScreen = () => {
    navigation.navigate('register-password' as never);
  };

  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={goToRegisterScreen}>
      <Plus color={'#fff'} size={22} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    width: 50,
    height: 50,
    bottom: h * 0.05,
    right: w * 0.05,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    elevation: 2,
    zIndex: 99,
  },
  icon: {color: 'white'},
});
