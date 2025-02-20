import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';

export const RegisterPasswordPage: React.FC = () => {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.dispatch({
      type: 'RESET',
      payload: {
        index: 0,
        routes: [{name: 'home'}],
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.textfield}>
          <Text style={styles.textfieldTitle}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#1d1d1dbe'}
            placeholder="Digite o nome da aplicação"
          />
        </View>
        <View style={styles.textfield}>
          <Text style={styles.textfieldTitle}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#1d1d1dbe'}
            placeholder="Digite sua senha"
          />
        </View>

        <TouchableOpacity style={styles.btn} onPress={goToHome}>
          <Text style={styles.btnText}>Salvar senha</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    padding: 5,
  },
  textfield: {
    marginBottom: 10,
    gap: 5,
    display: 'flex',
    flexDirection: 'column',
  },
  textfieldTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  input: {
    backgroundColor: '#c0c0c0aa',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 3,
    fontSize: 16,
  },
  btn: {
    width: '100%',
    backgroundColor: '#008080',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  btnText: {fontSize: 16, color: '#fff'},
});
