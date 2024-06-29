import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {DetailScreen, FavoriteScreen, HomeScreen} from '../pages';
import {SavedContext} from '../context/SavedContext';
import {Alert} from 'react-native';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [favorite, setFavorite] = useState([]);

  const savedContextValue = {
    addToFav: data => {
      if (favorite.length > 0) {
        favorite.forEach(element => {
          if (element.id === data.id) {
            const filter = favorite.filter(x => x.id !== data.id);
            setFavorite(filter);
            Alert.alert('Removed', `${data.name} removed from favorite`);
          } else {
            setFavorite([...favorite, data]);

            Alert.alert('Success', `${data.name} added to favorite`);
          }
        });
      } else {
        setFavorite([...favorite, data]);

        Alert.alert('Success', `${data.name} added to favorite`);
      }
    },
    favorite,
  };

  return (
    <SavedContext.Provider value={savedContextValue}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Favorite" component={FavoriteScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </SavedContext.Provider>
  );
};

export default StackNavigator;
