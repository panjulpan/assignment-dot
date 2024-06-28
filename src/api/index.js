import axios from 'axios';
import {Alert} from 'react-native';

const Client = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

Client.interceptors.request.use(
  async config => {
    return config;
  },
  error => Promise.reject(error),
);

Client.interceptors.response.use(
  async res => {
    console.log('res: ', res);
    return res;
  },
  async error => {
    if (error.response) {
      // Request made and server responded
      Alert.alert('Error', 'Gagal mengambil data');
    } else if (error.request) {
      // The request was made but no response was received
      Alert.alert(
        'Response Error',
        'The request was made but no response was received',
      );
    } else {
      // Something happened in setting up the request that triggered an Error
      Alert.alert('Koneksi Error', 'Harap periksa koneksi anda');
    }

    return Promise.reject(error);
  },
);

export {Client};
