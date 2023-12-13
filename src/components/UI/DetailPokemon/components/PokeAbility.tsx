import React, {FC} from "react";
import PokeAPI from "pokedex-promise-v2";
import * as S from '../styled';
import PokeProp from "../../PokeProp";

interface IPokeAbility {
  abilities: PokeAPI.AbilityElement[]
}

const PokeAbility: FC<IPokeAbility> = ({abilities}) => {

  return (
    <S.AbilitiesContainer>
      <S.AbilitiesTitle>Abilities</S.AbilitiesTitle>
      <S.AbilitiesWrapper>
        {abilities.map(ability => (
          <PokeProp value={ability.ability.name}/>
        ))}
      </S.AbilitiesWrapper>
    </S.AbilitiesContainer>
  )
};

export default PokeAbility;
