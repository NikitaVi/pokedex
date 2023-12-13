import ApiClient from "../core";

export class Evolution {

  static getEvolutionChain = (param: string | number) => {
    return ApiClient.get(`/evolution-chain/${param}/`)
  }

  static getSpecies = (param: string | number) => {
    return ApiClient.get(`/pokemon-species/${param}/`)
  }
}
