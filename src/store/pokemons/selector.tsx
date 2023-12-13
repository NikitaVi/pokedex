import {RootState} from "../core";
import {RemoteData} from "../../libs/remote";
import PokeAPI, {Pokedex, Pokemon} from "pokedex-promise-v2";
import {PokemonsListType} from "./types";


export const selectDetailPokemon = (state: RootState): RemoteData<Pokemon & {chain: PokeAPI.Chain}> => state.pokemon.pokemonDetail;

export const selectPokemonsList = (state: RootState): RemoteData<PokemonsListType[]> => state.pokemon.pokemonsList
