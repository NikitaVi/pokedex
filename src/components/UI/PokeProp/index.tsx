import React, {FC} from 'react';
import * as S from "./styled";

interface IPokeProp {
  label?: string;
  value: string | number;
  bgColor?: string;
}

const PokeProp: FC<IPokeProp> = ({label, value, bgColor}) => {

  return (
    <S.PokeProWrap>
      {label && label}
      <S.PokeProperty bgColor={bgColor}>
        {value}
      </S.PokeProperty>
    </S.PokeProWrap>
  )
};

export default PokeProp;
