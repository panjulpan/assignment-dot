import {Dimensions, PixelRatio} from 'react-native';

const {height, width} = Dimensions.get('window');

const pixelDensity = PixelRatio.get();

const Dimension = {
  height: height,
  width: width,
  physicalWidth: width * pixelDensity,
  physicalHeight: height * pixelDensity,
  dimTotal: height + width,
};

export default Dimension;
