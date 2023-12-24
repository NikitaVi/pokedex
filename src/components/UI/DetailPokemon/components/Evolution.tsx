import React, {FC, useEffect, useState} from "react";
import PokeAPI from "pokedex-promise-v2";
import * as S from '../styled';
import {PokemonChainImg} from "../styled";
import {fetchDetailPokemon} from "../../../../store/pokemons/slice";

interface IEvolution {
  chain: PokeAPI.Chain;
  selectHandler(id: number): void
}

type EvolutionPokemon = {
  id: number,
  minLvl: number
}

const Evolution: FC<IEvolution> = ({chain, selectHandler}) => {
  const [evolutionChain, setEvolutionChain] = useState<EvolutionPokemon[]>([]);

  useEffect(() => {
    setEvolutionChain([]);

    const evolutionHandler = (chain: PokeAPI.Chain) => {
      setEvolutionChain(prev => [...prev,
        {
          id: +chain.species.url
            .replace("https://pokeapi.co/api/v2/pokemon-species/", "")
            .replace("/", ""),
          minLvl: !!chain.evolution_details[0] ? chain.evolution_details[0].min_level : 1
        }
      ]);
      if (!!chain.evolves_to.length) {
        evolutionHandler(chain.evolves_to[0])
      }
    }

    evolutionHandler(chain);
  }, [chain]);

  return (
    <S.EvolutionRow>
      {evolutionChain.map(pokemon => (
        <S.PokemonChainItem key={pokemon.id} onClick={() => selectHandler(pokemon.id)}>
          <S.PokemonChainImg src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
          {`LVL ${pokemon.minLvl}`}
        </S.PokemonChainItem>
      ))}
    </S.EvolutionRow>
  )
};

export default Evolution
