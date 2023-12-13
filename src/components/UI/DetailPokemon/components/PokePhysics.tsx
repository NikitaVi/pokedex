import React, {FC} from "react";
import * as S from "../styled";
import PokeProp from "../../PokeProp";

interface IPokePhysics {
  height: number;
  weight: number;
}

const PokePhysics: FC<IPokePhysics> = ({height, weight}) => {
  return (
    <S.PokePhysicsWrap>
      <PokeProp label={"height"} value={height}/>
      <PokeProp label={"weight"} value={weight}/>
    </S.PokePhysicsWrap>
  )
}

export default PokePhysics
