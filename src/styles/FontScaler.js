import {Dimensions} from 'react-native';

// const scaleFont = size => {
//   const {width, height} = Dimensions.get('window');
//   const convertSize = Math.round((width + height) * size);
//   const screenFactor = Math.min(width, height) / 600; // Adjust the base width (360) as needed
//   return Math.round(convertSize * screenFactor);
// };

const scaleFont = size => {
  const {width} = Dimensions.get('window');
  const refWidth = 360;
  // const refHeight = 1189;
  const scale = width / refWidth;
  const minScale = 0.5;
  const maxScale = 2;
  return size * Math.min(Math.max(scale, minScale), maxScale);
};

export default scaleFont;
