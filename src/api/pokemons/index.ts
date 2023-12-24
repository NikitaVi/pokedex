import ApiClient from "../core";

export class Pokemons {

  static getPokemon = (param: string | number) => {
    return ApiClient.get(`/pokemon/${param}/`)
  }

  static getPokemonsList = (pager: {pageSize: number, offset?: number}) => {
    return ApiClient.get(`/pokemon?limit=${pager.pageSize}&offset=${pager.offset}`)
  }
}
