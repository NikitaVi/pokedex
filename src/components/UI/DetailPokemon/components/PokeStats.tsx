import React, {FC} from 'react';
import PokeAPI from "pokedex-promise-v2";
import * as S from "../styled";
import {PokeStatsTitle, StatValue} from "../styled";

interface IPokeStats {
  stats: PokeAPI.StatElement[];
}

enum StatEnumName {
  "hp" = "HP",
  "attack" = "DMG",
  "defense" = "DEF",
  "special-attack" = "SA",
  "special-defense" = "SD",
  "speed" = "SP"
}

enum StatEnumColor {
  "hp" = "red",
  "attack" = "skyBlue",
  "defense" = "darkSeaGreen",
  "special-attack" = "steelBlue",
  "special-defense" = "seaGreen",
  "speed" = "bgGrey"
}

const PokeStats: FC<IPokeStats> = ({stats}) => {

  return (
    <S.PokeStatsContainer>
      <PokeStatsTitle>Stats</PokeStatsTitle>
      <S.StatsWrapper>
        {stats.map((stat, idx) => (
          <S.StatWrap key={idx}>
            <S.StatName bgColor={StatEnumColor[stat.stat.name as keyof typeof StatEnumColor]}>
              {StatEnumName[stat.stat.name as keyof typeof StatEnumName]}
            </S.StatName>
            <S.StatValue>
              {stat.base_stat}
            </S.StatValue>
          </S.StatWrap>
        ))}
      </S.StatsWrapper>
    </S.PokeStatsContainer>
  )
};

export default PokeStats;
