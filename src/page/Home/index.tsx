import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/core";
import {selectDetailPokemon} from "../../store/pokemons/selector";
import {fetchDetailPokemon} from "../../store/pokemons/slice";
import {RemoteDataStatus} from "../../libs/remote";

const Home = () => {

  const dispatch = useAppDispatch();
  const pokemon = useAppSelector(selectDetailPokemon);

  useEffect(() => {
    dispatch(fetchDetailPokemon(1));
  }, [])
    return (
        <span>
            home
        </span>
    )
}

export default Home;