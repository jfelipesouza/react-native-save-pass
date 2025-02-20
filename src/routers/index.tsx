import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackRouters} from './stack';

export const Routers = () => {
  return (
    <NavigationContainer>
      <StackRouters />
    </NavigationContainer>
  );
};
