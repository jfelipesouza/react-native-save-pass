import React from 'react';
import {StatusBar} from 'react-native';

import {Routers} from './routers';

export const MyApp: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor={'trasnparent'} hidden />
      <Routers />
    </>
  );
};
