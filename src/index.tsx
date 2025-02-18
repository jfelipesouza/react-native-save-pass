import React from 'react';
import {
  SafeAreaView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from './components/header';
import {h, w} from './utils/dimensions';

const SectionHeaderComponent = () => <Text style={styles.title}> Alterou</Text>;
export const MyApp: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'trasnparent'} hidden />
      <Header />

      <SectionList
        sections={[
          {
            title: 'A',
            data: ['Pizza', 'Burger', 'Risotto'],
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
        renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                borderLeftColor: '#d0d0d0',
                borderLeftWidth: 1,
                paddingLeft: 10,
                paddingVertical: 5,
              }}>
              <TouchableOpacity
                onPress={() => {
                  console.log('Clicou');
                }}
                activeOpacity={0.8}
                style={{
                  backgroundColor: '#d0d0d0',
                  paddingVertical: 12,
                  paddingHorizontal: 5,
                  borderRadius: 5,
                }}>
                <Text key={index.toString().concat(item)}>{item}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        ListHeaderComponent={SectionHeaderComponent}
        contentContainerStyle={{paddingHorizontal: 12}}
        style={{flex: 1}}
      />

      <TouchableOpacity
        style={{
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
        }}>
        <Text style={{color: 'white'}}>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 23,
    fontWeight: '500',
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
  },
});
