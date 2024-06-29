import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import scaleFont from '../styles/FontScaler';
import Colors from '../styles/Color';

const StatsComponent = ({stats, color}) => {
  const nameData = name => {
    switch (name) {
      case 'hp':
        return (
          <Text style={[styles.statsTitle, {color: Colors[color]}]}>HP</Text>
        );
      case 'attack':
        return (
          <Text style={[styles.statsTitle, {color: Colors[color]}]}>ATK</Text>
        );
      case 'defense':
        return (
          <Text style={[styles.statsTitle, {color: Colors[color]}]}>DEF</Text>
        );
      case 'special-attack':
        return (
          <Text style={[styles.statsTitle, {color: Colors[color]}]}>SATK</Text>
        );
      case 'special-defense':
        return (
          <Text style={[styles.statsTitle, {color: Colors[color]}]}>SDEF</Text>
        );
      case 'speed':
        return (
          <Text style={[styles.statsTitle, {color: Colors[color]}]}>SPD</Text>
        );

      default:
        return (
          <Text style={[styles.statsTitle, {color: Colors[color]}]}>
            x.stat.name.toUpperCase()
          </Text>
        );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: Colors[color]}]}>Base Stats</Text>
      {stats.map((x, idx) => {
        return (
          <View style={styles.statContainer} key={idx}>
            <View style={styles.statsTitleContainer}>
              {nameData(x.stat.name)}
            </View>
            <View style={styles.statsBarContainer}>
              <Text style={styles.statsPoin}>{x.base_stat}</Text>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressBarFilled,
                    {
                      backgroundColor: Colors[color],
                      width: `${(x.base_stat / 200) * 100}%`,
                    },
                  ]}
                />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default StatsComponent;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    // alignItems: 'center',
  },

  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: scaleFont(14),
    textAlign: 'center',
  },

  statContainer: {
    flexDirection: 'row',
  },

  statsTitleContainer: {
    borderRightWidth: 1,
    borderColor: Colors.light,
    flex: 0.1,
    alignItems: 'flex-end',
    paddingVertical: 2,
    paddingRight: 12,
  },

  statsTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: scaleFont(10),
  },

  statsBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
    flex: 1,
  },

  statsPoin: {
    fontFamily: 'Poppins-Regular',
    fontSize: scaleFont(10),
    color: Colors.black,
    paddingHorizontal: 12,
  },

  progressBar: {
    height: 4,
    backgroundColor: Colors.light,
    flex: 1,
  },

  progressBarFilled: {
    height: 4,
  },
});
