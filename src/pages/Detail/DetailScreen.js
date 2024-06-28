/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PokemonServices} from '../../services';

const DetailScreen = ({navigation, route}) => {
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

  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
