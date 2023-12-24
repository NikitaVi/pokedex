import React, {useEffect} from "react";
import {Section} from "../../components/UI/Section";
import {useAppDispatch, useAppSelector} from "../../store/core";
import {selectDetailPokemon, selectPokemonsList} from "../../store/pokemons/selector";
import {fetchPokemonsList} from "../../store/pokemons/slice";
import {hasData, RemoteDataStatus} from "../../libs/remote";
import PokemonCard from "../../components/UI/PokemonCard";
import * as S from './styled';
import DetailPokemon from "../../components/UI/DetailPokemon";
import InfiniteScroll from "react-infinite-scroll-component";

const PokemonsPage = () => {
  const dispatch = useAppDispatch();
  const pokemonsList = useAppSelector(selectPokemonsList);
  const detailPokemon = useAppSelector(selectDetailPokemon);

  useEffect(() => {
    dispatch(fetchPokemonsList({pageSize: 20}));
  }, [dispatch]);

  const pagerHandler =() => {
    if (hasData(pokemonsList)) {
        const url = new URL(pokemonsList.data.next!);
        const params = url.searchParams
        //Записываем query в формате {limit: number, offset?: number}
        const queryArr = params.toString().split("&")
          .map(param => param.split("="))
          .map(param => ({[`${param[0]}`]: param[1]}));
        const query = {...queryArr[0], ...queryArr[1]};
        dispatch(fetchPokemonsList({pageSize: +query.limit ?? 20, offset: +query.offset ?? 0}));
    }
  }
  //
  // useEffect(() => {
  //   if (hasData(detailPokemon)) {
  //     document.body.style.overflow = "hidden";
  //
  //     return () => {
  //       document.body.style.overflow = "auto";
  //     }
  //   }
  // }, [detailPokemon])

  if (pokemonsList.status !== RemoteDataStatus.Success) return <></>;

  return (
    <Section>
      <S.GridPageWrapper>
        <S.GridWrapper>
          <S.GridContainer
            dataLength={pokemonsList.data.list.length} //This is important field to render the next data
            next={pagerHandler}
            hasMore={!!pokemonsList.data.next}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }>
              {pokemonsList.data.list.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id}/>)}
          </S.GridContainer>
        </S.GridWrapper>
        {hasData(detailPokemon) && (
          <DetailPokemon pokemon={detailPokemon.data}/>
        )}
      </S.GridPageWrapper>
    </Section>
  )
}

export default PokemonsPage;
