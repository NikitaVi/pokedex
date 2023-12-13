import ApiClient from "../core";

export class Pokemons {

  static getPokemon = (param: string | number) => {
    return ApiClient.get(`/pokemon/${param}/`)
  }

  static getPokemonsList = () => {
    return ApiClient.get(`/pokemon/`)
  }
}