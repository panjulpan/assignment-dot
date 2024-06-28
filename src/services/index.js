import {Client} from '../api';

const PokemonServices = {
  getPokemonDetail: async name => {
    return await Client.get(`pokemon/${name}`, {
      headers: {'Content-Type': 'application/json'},
    });
  },
};

export {PokemonServices};
