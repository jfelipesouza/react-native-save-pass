import React, {useState} from 'react';
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
import {createPassword} from '../../services/databases/watermelon/functions';

export const RegisterPasswordPage: React.FC = () => {
  const navigation = useNavigation();

  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const goToHome = () => {
    navigation.dispatch({
      type: 'RESET',
      payload: {
        index: 0,
        routes: [{name: 'home'}],
      },
    });
  };

  const savePassword = async () => {
    const success = await createPassword({name, password});
    if (success) {
      goToHome();
    }
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
            value={name}
            onChangeText={text => setName(text)}
          />
        </View>
        <View style={styles.textfield}>
          <Text style={styles.textfieldTitle}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#1d1d1dbe'}
            placeholder="Digite sua senha"
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>

        <TouchableOpacity style={styles.btn} onPress={savePassword}>
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
