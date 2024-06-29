import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import Colors from '../styles/Color';
import scaleFont from '../styles/FontScaler';

const LoadingComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loadingCard}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text style={styles.loadingText}>Loading . . . .</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  loadingCard: {
    backgroundColor: '#FFFFFF',
    width: '70%',
    height: '20%',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    alignSelf: 'center',
    paddingTop: 20,
    fontFamily: 'Poppins-Medium',
    color: Colors.black,
    fontSize: scaleFont(14),
  },
});

export default LoadingComponent;
