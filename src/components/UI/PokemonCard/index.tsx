import React, {FC} from "react";
import * as S from './styled';
import {PokemonsListType, PokemonTypeEnum} from "../../../store/pokemons/types";
import {fetchDetailPokemon} from "../../../store/pokemons/slice";
import {useAppDispatch} from "../../../store/core";
import PokeProp from "../PokeProp";

interface IPokemonCard {
  pokemon: PokemonsListType
}


const PokemonCard: FC<IPokemonCard> = ({pokemon}) => {

  const dispatch = useAppDispatch();

  const selectHandler = () => {
    dispatch(fetchDetailPokemon(pokemon.id));
  }

  return (
    <S.CardWrapper key={pokemon.id} onClick={() => selectHandler()}>
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
