import React, {useEffect} from "react";
import {Section} from "../../components/UI/Section";
import {useAppDispatch, useAppSelector} from "../../store/core";
import {selectDetailPokemon, selectPokemonsList} from "../../store/pokemons/selector";
import {fetchPokemonsList} from "../../store/pokemons/slice";
import {hasData, RemoteDataStatus} from "../../libs/remote";
import PokemonCard from "../../components/UI/PokemonCard";
import * as S from './styled';
import DetailPokemon from "../../components/UI/DetailPokemon";

const PokemonsPage = () => {

  const dispatch = useAppDispatch();
  const pokemonsList = useAppSelector(selectPokemonsList);
  const detailPokemon = useAppSelector(selectDetailPokemon);

  useEffect(() => {
    dispatch(fetchPokemonsList());
  }, [dispatch]);

  if (pokemonsList.status !== RemoteDataStatus.Success) return <></>;

  return (
    <Section>
      <S.GridPageWrapper>
        <S.GridWrapper>
          {pokemonsList.data.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id}/>)}
        </S.GridWrapper>
        {hasData(detailPokemon) && (
          <DetailPokemon pokemon={detailPokemon.data}/>
        )}
      </S.GridPageWrapper>
    </Section>
  )
}

export default PokemonsPage;
