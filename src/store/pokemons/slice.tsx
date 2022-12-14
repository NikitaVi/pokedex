import Pokedex from 'pokedex-promise-v2';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialized, RemoteData} from "../../libs/remote";
import {PokemonsListType} from "./types";

export interface IDetailPokemonState {
  pokemonDetail: RemoteData<Pokedex.Pokemon>,
  pokemonsList: RemoteData<PokemonsListType[]>
}

const initialState: IDetailPokemonState = {
  pokemonDetail: initialized() as RemoteData<Pokedex.Pokemon>,
  pokemonsList: initialized() as RemoteData<PokemonsListType[]>
}

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {

    /**
     * Получение детальной информации о покемонах
     */

    fetchDetailPokemon: (_state, _action: PayloadAction<string | number>) => {},
    setDetailPokemon: (state, action: PayloadAction<RemoteData<Pokedex.Pokemon>>) => {
      state.pokemonDetail = action.payload
    },

    /**
     * Получение детальной информации о покемонах
     */

    fetchPokemonsList: () => {},
    setPokemonsList: (state, action: PayloadAction<RemoteData<PokemonsListType[]>>) => {
      state.pokemonsList = action.payload
    },
  }
});

export const {
  fetchDetailPokemon,
  setDetailPokemon,
  fetchPokemonsList,
  setPokemonsList
} = pokemonSlice.actions

export default pokemonSlice.reducer