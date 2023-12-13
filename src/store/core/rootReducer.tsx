import {combineReducers} from "@reduxjs/toolkit";
import {pokemonSlice} from "../pokemons/slice";

const rootReducer = combineReducers({
  pokemon: pokemonSlice.reducer,
})

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
