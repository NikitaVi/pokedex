import ApiClient from "../core";

export class PokemonsTypes {

  static getPokemonType = (param: string | number) => {
    return ApiClient.get(`/type/${param}/`)
  }

  static getPokemonsTypesList = () => {
    return ApiClient.get(`/type/`)
  }
}
