import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Dimension from '../styles/Dimensions';
import Colors from '../styles/Color';
import scaleFont from '../styles/FontScaler';

const GridComponent = ({data, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.gridContainer, styles.shadowProp]}>
      <View style={styles.bottomBackround} />
      <View style={styles.contentContainer}>
        <Text style={styles.number}>#{data.number}</Text>
        <Image source={data.image} style={styles.image} resizeMode="contain" />
        <Text style={styles.name}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GridComponent;

const styles = StyleSheet.create({
  gridContainer: {
    borderWidth: 1,
    borderColor: Colors.background,
    backgroundColor: Colors.white,
    height: Math.round(Dimension.height * 0.16875),
    width: Math.round(Dimension.width * 0.29),
    marginBottom: 6,
    borderRadius: 8,
    // padding: 6,
  },

  bottomBackround: {
    position: 'absolute',
    height: '40%',
    width: '100%',
    backgroundColor: Colors.background,
    bottom: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  contentContainer: {
    padding: 6,
  },

  number: {
    textAlign: 'right',
    fontFamily: 'Poppins-Regular',
    fontSize: scaleFont(8),
    color: Colors.medium,
  },

  image: {
    height: Math.round(Dimension.dimTotal * 0.072),
    width: Math.round(Dimension.dimTotal * 0.072),
    alignSelf: 'center',
  },

  name: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: scaleFont(10),
    color: Colors.black,
  },

  shadowProp: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 3,
  },
});
