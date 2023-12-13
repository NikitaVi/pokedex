import React, {FC, useEffect} from "react";
import * as S from './styled';
import { useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../store/core";
import {fetchDetailPokemon} from "../../store/pokemons/slice";
import {selectDetailPokemon} from "../../store/pokemons/selector";
import {Section} from "../../components/UI/Section";
import {fold} from "../../libs/remote";
import {Pokemon} from "pokedex-promise-v2";
import {DetailPageWrapper} from "./styled";

const DetailPokemon = () => {

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector(selectDetailPokemon);

  useEffect(() => {
    if (id) {
      dispatch(fetchDetailPokemon(id))
    }
  }, [id]);

  const detailPokemonFolder = fold<Pokemon>(
    (data) => <Success pokemon={data}/>,
    () => <Loading />,
    () => <Loading />,
    () => <Loading />,
  )

  return (
    <>
      {detailPokemonFolder(pokemon)}
    </>
  )
};

interface ISuccess {
  pokemon: Pokemon
}

const Success: FC<ISuccess> = ({pokemon}) => {


  return (
    <S.DetailPageWrapper>
      <S.InfoWrapper>

      </S.InfoWrapper>
    </S.DetailPageWrapper>
  )
};

const Loading = () => {

  return (
    <>
    </>
  )
}

export default DetailPokemon;
