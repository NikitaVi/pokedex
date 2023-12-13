import { SagaIterator } from "redux-saga";
import {all, fork} from "redux-saga/effects"
import pokemonSaga from "../pokemons/saga";

export default function* rootSaga(): SagaIterator {
  yield all([
    fork(pokemonSaga),
  ])
}
