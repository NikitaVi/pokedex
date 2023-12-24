import {SagaIterator} from "redux-saga";
import {all, takeLatest, put, call, select} from "redux-saga/effects";
import {fetchDetailPokemon, fetchPokemonsList, setDetailPokemon, setDisableFetch, setPokemonsList} from "./slice";
import Pokedex from "pokedex-promise-v2";
import {Pokemons} from "../../api/pokemons";
import { success, failure} from "../../libs/remote";
import {AxiosError} from "axios";
import {PokemonsListItem, PokemonsListType} from "./types";
import {PokemonsTypes} from "../../api/pokemonsTypes";
import {Evolution} from "../../api/evolution";
import {selectPokemonsList} from "./selector";

function* pokemonSaga(): SagaIterator {
  yield all([
    takeLatest(fetchDetailPokemon, function* fetchDetailPokemonSaga({payload}) {
      try {
        const {data} : {data: Pokedex.Pokemon} = yield call(Pokemons.getPokemon, payload);
        const {data: spices} : {data: Pokedex.PokemonSpecies} = yield call(Evolution.getSpecies, payload);
        const {data: chain} : {data: Pokedex.EvolutionChain} =
          yield call(
            Evolution.getEvolutionChain,
            spices.evolution_chain.url.replace("https://pokeapi.co/api/v2/evolution-chain/", "")
          );

        yield put(setDetailPokemon(success({...data, chain: chain.chain})));
        yield put(setDisableFetch(false));
      } catch (err) {
        yield put(setDetailPokemon(failure((err as AxiosError).message)));
      }
    }),

    takeLatest(fetchPokemonsList, function* fetchPokemonsSaga({payload}) {
      try {
        const {data: oldPokemonsList}: {data: PokemonsListType} = yield select(selectPokemonsList);
        const {data} : {data: Pokedex.NamedAPIResourceList} = yield call(Pokemons.getPokemonsList, payload);
        const {data: types} : {data: Pokedex.NamedAPIResourceList} = yield call(PokemonsTypes.getPokemonsTypesList);
        const typesArr: Pokedex.Type[] = [];
        const typesFetcher = async () => {
          if (!typesArr.length) {
            for (const {name} of types.results) {
              await PokemonsTypes.getPokemonType(name).then(({data}) => typesArr.push(data));
            }
          }
        }
        yield typesFetcher();
        const newData: PokemonsListItem[] = [];

        data.results.forEach(pokemon => {
          const arrUrl = pokemon.url.split("/");
          newData.push({
            name: pokemon.name,
            id: +arrUrl[arrUrl.length - 2],
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${+arrUrl[arrUrl.length - 2]}.svg`,
            type: typesArr.filter(type => type.pokemon.find(poke => poke.pokemon.name === pokemon.name))!.map(type => type.name)
          })

        });

        yield put(setPokemonsList(success({next: data.next, list: [...(oldPokemonsList?.list ?? []), ...newData]})));
      } catch (err) {
        yield put(setPokemonsList(failure((err as AxiosError).message)));
      }
    }),

  ])
}

export default pokemonSaga;
