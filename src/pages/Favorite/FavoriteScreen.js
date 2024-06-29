import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Colors from '../../styles/Color';
import {Icon} from '../../../assets/Icon';
import Dimension from '../../styles/Dimensions';
import scaleFont from '../../styles/FontScaler';
import data from '../../dummy/dummyPokemon';
import GridComponent from '../../components/GridComponent';
import {SavedContext} from '../../context/SavedContext';

const FavoriteScreen = ({navigation}) => {
  const {favorite} = useContext(SavedContext);
  const [pokeData, setPokeData] = useState(favorite);
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    setSearchText(text);
    const newData = data.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setPokeData(newData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon.Back
              height={Math.round(Dimension.dimTotal * 0.024)}
              width={Math.round(Dimension.dimTotal * 0.024)}
              style={{color: Colors.white}}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Favorite</Text>
        </View>
        <View style={styles.topContentContainer}>
          <View style={styles.inputContainer}>
            <Icon.Search
              height={Math.round(Dimension.dimTotal * 0.016)}
              width={Math.round(Dimension.dimTotal * 0.016)}
              style={{color: Colors.primary}}
            />
            <TextInput
              style={styles.inputStyle}
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
              placeholder="Search"
              placeholderTextColor={Colors.medium}
              onChangeText={handleSearch}
              value={searchText}
            />
          </View>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          data={pokeData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <GridComponent
              data={item}
              onPress={() => navigation.navigate('Detail', {data: item})}
            />
          )}
          numColumns={3}
          keyExtractor={item => item.id}
          columnWrapperStyle={styles.gridContainer}
        />
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },

  topContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontSize: scaleFont(24),
    fontFamily: 'Poppins-Bold',
    marginLeft: 16,
    marginTop: 6,
    color: Colors.white,
  },

  topContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  inputContainer: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 100,
    flex: 1,
  },

  inputStyle: {
    flex: 1,
    marginLeft: 10,
    padding: 4,
    paddingTop: 6,
    fontFamily: 'Poppins-Regular',
    fontSize: scaleFont(10),
    color: Colors.black,
  },

  buttonFavorite: {
    backgroundColor: Colors.white,
    height: Math.round(Dimension.dimTotal * 0.032),
    width: Math.round(Dimension.dimTotal * 0.032),
    borderRadius: Math.round(Dimension.dimTotal * 0.032),
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    margin: 4,
    borderRadius: 8,
    paddingVertical: 24,
    paddingHorizontal: 12,
  },

  gridContainer: {justifyContent: 'space-between'},
});
