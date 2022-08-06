import React, {useEffect} from "react";
import {Section} from "../../components/UI/Section";
import {useAppDispatch, useAppSelector} from "../../store/core";
import {selectDetailPokemon, selectPokemonsList} from "../../store/pokemons/selector";
import {fetchDetailPokemon, fetchPokemonsList} from "../../store/pokemons/slice";
import {RemoteDataStatus} from "../../libs/remote";

const PokemonsPage = () => {

  const dispatch = useAppDispatch();
  const pokemon = useAppSelector(selectDetailPokemon);
  const pok = useAppSelector(selectPokemonsList);

  console.log(pok)

  useEffect(() => {
    dispatch(fetchDetailPokemon(1));
    dispatch(fetchPokemonsList());
  }, [dispatch]);

  return (
    <Section>
      {pokemon.status === RemoteDataStatus.Success && (
        <>
        <span>
          {
            pokemon.data.name
          }
        </span>
          {pokemon.data.sprites.other["official-artwork"].front_default && <img src={pokemon.data.sprites.other["official-artwork"].front_default}/>}
        </>
      )}
    </Section>
  )
}

export default PokemonsPage;