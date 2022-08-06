import {RootState} from "../core";
import {RemoteData} from "../../libs/remote";
import {Pokemon} from "pokedex-promise-v2";
import {PokemonsListType} from "./types";


export const selectDetailPokemon = (state: RootState): RemoteData<Pokemon> => state.pokemon.pokemonDetail;

export const selectPokemonsList = (state: RootState): RemoteData<PokemonsListType[]> => state.pokemon.pokemonsList