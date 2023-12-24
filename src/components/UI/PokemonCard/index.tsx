import React, {FC} from "react";
import * as S from './styled';
import {PokemonsListItem, PokemonTypeEnum} from "../../../store/pokemons/types";
import {fetchDetailPokemon, setDisableFetch} from "../../../store/pokemons/slice";
import {useAppDispatch, useAppSelector} from "../../../store/core";
import PokeProp from "../PokeProp";
import {selectDetailPokemon, selectDisableFetch} from "../../../store/pokemons/selector";
import {hasData} from "../../../libs/remote";

interface IPokemonCard {
  pokemon: PokemonsListItem
}

const PokemonCard: FC<IPokemonCard> = ({pokemon}) => {

  const dispatch = useAppDispatch();
  const detailPokemon = useAppSelector(selectDetailPokemon);
  const disableFetch = useAppSelector(selectDisableFetch);

  const selectHandler = () => {
    console.log(11)
    dispatch(fetchDetailPokemon(pokemon.id));
    dispatch(setDisableFetch(true));
  }

  return (
    <S.CardWrapper
      key={pokemon.id}
      onClick={selectHandler}
      disabled={(hasData(detailPokemon) && pokemon.id === detailPokemon.data.id) || disableFetch}
    >
      <S.CardImage src={pokemon.img}/>
      <S.CardTitle>
        {pokemon.name}
      </S.CardTitle>
      <S.TypesWrapper>
        {pokemon.type.map((item, idx) => (
          <PokeProp value={item} key={idx} bgColor={PokemonTypeEnum[item as keyof typeof PokemonTypeEnum]}/>
        ))}
      </S.TypesWrapper>
    </S.CardWrapper>
  )
}

export default PokemonCard;
