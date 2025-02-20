import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePage} from '../pages/home';

const {Navigator, Screen} = createStackNavigator();

const StackRouters: React.FC = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="home" component={HomePage} />
    </Navigator>
  );
};

export {StackRouters};
