import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

const dimensionsRelativeScale = (percent: number) => {
  return (percent * width) / 100;
};

export {height as h, width as w, dimensionsRelativeScale as scale};
