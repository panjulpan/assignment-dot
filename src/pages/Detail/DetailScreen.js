/* eslint-disable react-hooks/exhaustive-deps */
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {PokemonServices} from '../../services';
import Colors from '../../styles/Color';
import LoadingComponent from '../../components/LoadingComponent';
import {Icon} from '../../../assets/Icon';
import Dimension from '../../styles/Dimensions';
import scaleFont from '../../styles/FontScaler';
import StatsComponent from '../../components/StatsComponent';
import {SavedContext} from '../../context/SavedContext';

const DetailScreen = ({navigation, route}) => {
  const {favorite, addToFav} = useContext(SavedContext);
  const {data} = route.params;
  const [detailData, setDetailData] = useState(null);

  const getDataPokemon = async () => {
    try {
      const pokemon = await PokemonServices.getPokemonDetail(
        data.name.toLowerCase(),
      );

      setDetailData({
        weight: pokemon.data.weight,
        height: pokemon.data.height,
        types: pokemon.data.types,
        abilities: pokemon.data.abilities,
        stats: pokemon.data.stats,
      });
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    console.log('data: ', data);
    getDataPokemon();
  }, []);

  if (detailData === null) {
    return <LoadingComponent />;
  }

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: Colors[detailData?.types[0]?.type?.name]},
      ]}>
      <View style={styles.toolbar}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon.Back
              height={Math.round(Dimension.dimTotal * 0.032)}
              width={Math.round(Dimension.dimTotal * 0.032)}
              style={{color: Colors.white}}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{data.name}</Text>
        </View>
        <View>
          <Text style={styles.number}>#{data.number}</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.typeContentContainer}>
          {detailData.types.map((x, idx) => {
            return (
              <View
                style={[
                  styles.typeContainer,
                  {backgroundColor: Colors[x.type.name]},
                ]}
                key={idx}>
                <Text style={styles.typeText}>
                  {x.type.name.charAt(0).toUpperCase() + x.type.name.slice(1)}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={styles.aboutContainer}>
          <Text
            style={[
              styles.aboutTitle,
              {color: Colors[detailData?.types[0]?.type?.name]},
            ]}>
            About
          </Text>
          <View style={styles.aboutContentContainer}>
            <View style={styles.weightContainer}>
              <View style={styles.weightContent}>
                <Icon.Weight
                  height={16}
                  width={16}
                  style={{color: Colors.black}}
                />
                <Text style={styles.weight}>
                  {parseFloat(detailData.weight) / 10} kg
                </Text>
              </View>
              <Text style={styles.aboutContentSubtitle}>Weight</Text>
            </View>
            <View style={styles.heightContainer}>
              <View style={styles.weightContent}>
                <Icon.Ruler
                  height={16}
                  width={16}
                  style={{color: Colors.black}}
                />
                <Text style={styles.weight}>
                  {parseFloat(detailData.height) / 10} m
                </Text>
              </View>
              <Text style={styles.aboutContentSubtitle}>Height</Text>
            </View>
            <View style={styles.abilityContainer}>
              <View>
                {detailData.abilities.map((x, idx) => {
                  return (
                    <Text style={styles.abilityContent}>
                      {x.ability.name.charAt(0).toUpperCase() +
                        x.ability.name.slice(1)}
                    </Text>
                  );
                })}
              </View>
              <Text style={styles.aboutContentSubtitle}>Ability</Text>
            </View>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{data.desc}</Text>
        </View>
        <StatsComponent
          stats={detailData.stats}
          color={detailData?.types[0]?.type?.name}
        />
        <TouchableOpacity
          style={styles.addToFavButton}
          onPress={() => addToFav(data)}>
          {favorite.includes(data) ? (
            <Icon.Favorite
              height={24}
              width={24}
              style={{color: Colors.primary}}
            />
          ) : (
            <Icon.FavoriteOutline
              height={24}
              width={24}
              style={{color: Colors.primary}}
            />
          )}
        </TouchableOpacity>
      </View>
      <Image
        style={styles.imageStyle}
        resizeMode="contain"
        source={data.image}
      />
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },

  toolbar: {
    padding: 24,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.9,
  },

  title: {
    marginLeft: 10,
    fontFamily: 'Poppins-Bold',
    fontSize: scaleFont(24),
    color: Colors.white,
    marginTop: 4,
  },

  number: {
    marginLeft: 10,
    fontFamily: 'Poppins-Bold',
    fontSize: scaleFont(12),
    color: Colors.white,
    marginTop: 10,
  },

  contentContainer: {
    backgroundColor: Colors.white,
    margin: 4,
    borderRadius: 8,
    height: '64%',
    paddingTop: Math.round(Dimension.height * 0.0875),
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  typeContentContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  typeContainer: {
    borderRadius: 14,
    // paddingVertical: 2,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },

  typeText: {
    fontFamily: 'Poppins-Bold',
    fontSize: scaleFont(10),
    color: Colors.white,
    marginTop: 2,
  },

  aboutContainer: {
    alignItems: 'center',
    marginTop: 20,
  },

  aboutTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: scaleFont(14),
  },

  aboutContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  weightContainer: {
    flex: 0.33,
    justifyContent: 'space-between',
    height: Math.round(Dimension.height * 0.075),
    alignItems: 'center',
  },

  weightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  weight: {
    marginLeft: 8,
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
    fontSize: scaleFont(10),
    color: Colors.black,
  },

  heightContainer: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    flex: 0.33,
    justifyContent: 'space-between',
    height: Math.round(Dimension.height * 0.075),
    alignItems: 'center',
    borderColor: Colors.light,
  },

  abilityContainer: {
    flex: 0.33,
    justifyContent: 'space-between',
    height: Math.round(Dimension.height * 0.075),
    alignItems: 'center',
  },

  abilityContent: {
    fontFamily: 'Poppins-Regular',
    fontSize: scaleFont(10),
    color: Colors.black,
  },

  aboutContentSubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: scaleFont(8),
    color: Colors.medium,
  },

  descriptionContainer: {
    marginTop: 24,
  },

  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: scaleFont(10),
    color: Colors.black,
    textAlign: 'justify',
  },

  imageStyle: {
    position: 'absolute',
    alignSelf: 'center',
    height: Math.round(Dimension.dimTotal * 0.2),
    width: Math.round(Dimension.dimTotal * 0.2),
    top: '13%',
  },

  addToFavButton: {
    position: 'absolute',
    right: '6%',
    top: '5%',
  },
});
