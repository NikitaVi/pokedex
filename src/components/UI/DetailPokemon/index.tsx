import React, {FC} from "react";
import * as S from "./styled";
import PokeAPI from "pokedex-promise-v2";
import PokePhysics from "./components/PokePhysics";
import PokeStats from "./components/PokeStats";
import PokeAbility from "./components/PokeAbility";
import Evolution from "./components/Evolution";
import {fetchDetailPokemon, setDetailPokemon} from "../../../store/pokemons/slice";
import {useAppDispatch} from "../../../store/core";
import Close from '../../../resources/images/icons-close.svg';
import {initialized} from "../../../libs/remote";

interface IDetailPokemon {
  pokemon: PokeAPI.Pokemon & {chain: PokeAPI.Chain}
}

const DetailPokemon: FC<IDetailPokemon> = ({pokemon}) => {
  const dispatch = useAppDispatch();

  const selectHandler = (id: number) => {
    dispatch(fetchDetailPokemon(id));
  }

  const detailCloser = () => {
    dispatch(setDetailPokemon(initialized()));
  }

  return (
    <S.DetailPokemonWrapper>
      <S.CloseWrapper>
        <S.CloseBtn onClick={detailCloser}>
          <S.CloseIcon src={Close} alt="close-icon"/>
        </S.CloseBtn>
      </S.CloseWrapper>
      <S.PokeImage src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default ?? pokemon.sprites.front_default ?? ""} />
      <S.PokeName>{pokemon.name}</S.PokeName>
      <PokePhysics height={pokemon.height} weight={pokemon.weight} />
      <PokeAbility abilities={pokemon.abilities} />
      <PokeStats stats={pokemon.stats}/>
      <Evolution chain={pokemon.chain} selectHandler={selectHandler}/>
    </S.DetailPokemonWrapper>
  )
};

export default DetailPokemon;
