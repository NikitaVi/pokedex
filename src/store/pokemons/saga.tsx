import {SagaIterator} from "redux-saga";
import {all, takeLatest, put, call} from "redux-saga/effects";
import {fetchDetailPokemon, fetchPokemonsList, setDetailPokemon, setPokemonsList} from "./slice";
import Pokedex from "pokedex-promise-v2";
import {Pokemons} from "../../api/pokemons";
import {pending, success, failure} from "../../libs/remote";
import {AxiosError} from "axios";
import {PokemonsListType} from "./types";


function* pokemonSaga(): SagaIterator {
  yield all([
    takeLatest(fetchDetailPokemon, function* fetchDetailPokemonSaga({payload}) {
      try {
        yield put(setDetailPokemon(pending()));
        const {data} : {data: Pokedex.Pokemon} = yield call(Pokemons.getPokemon, payload);
        yield put(setDetailPokemon(success(data)));
      } catch (err) {
        yield put(setDetailPokemon(failure((err as AxiosError).message)));
      }
    }),

    takeLatest(fetchPokemonsList, function* fetchDetailPokemonSaga({payload}) {
      try {
        yield put(setPokemonsList(pending()));
        const {data} : {data: Pokedex.NamedAPIResourceList} = yield call(Pokemons.getPokemonsList);

        const newData: PokemonsListType[] = [];

        data.results.forEach(pokemon => {
          const arrUrl = pokemon.url.split("/");
          newData.push({
            name: pokemon.name,
            id: +arrUrl[arrUrl.length - 2],
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${+arrUrl[arrUrl.length - 2]}.svg`
          })
        });

        yield put(setPokemonsList(success(newData)));
      } catch (err) {
        yield put(setPokemonsList(failure((err as AxiosError).message)));
      }
    }),

  ])
}

export default pokemonSaga;