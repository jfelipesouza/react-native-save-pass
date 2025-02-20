import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {HomePage} from '../pages/home';
import {RegisterPasswordPage} from '../pages/register-password';

const {Navigator, Screen} = createStackNavigator();

const StackRouters: React.FC = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={'home'} component={HomePage} />
      <Screen
        name={'register-password'}
        component={RegisterPasswordPage}
        options={{
          headerShown: true,
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          title: 'Salve sua senha',
        }}
      />
    </Navigator>
  );
};

export {StackRouters};
