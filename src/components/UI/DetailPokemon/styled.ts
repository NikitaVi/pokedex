import styled, {css} from "styled-components";

export const DetailPokemonWrapper = styled.div`
  ${({ theme: { colors, radius, breakpoints  } }) => css`
    width: max-content;
    height: 100vh;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding: 40px 5%;
    margin: 20px 0;
    background-color: ${colors.violet};
    border-radius: ${radius.r10};

    @media (max-width: ${breakpoints.tabletMd}) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: auto;
      height: 100%;
    }
  `}
`;

export const PokeImage = styled.img`
  width: 160px;
  height: 160px;
  image-rendering: pixelated;
`;

export const PokeName = styled.h1`
  ${({ theme: { typography} }) => css`
    font-size: ${typography.fontSize.largeSize};
    text-transform: capitalize;
  `}
`;

export const PokePhysicsWrap = styled.div`
  ${({ theme: { unit} }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${unit * 1.5}px;
  `}
`;

export const StatsWrapper = styled.div`
  ${({ theme: { unit} }) => css`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    gap: ${unit}px;
    justify-content: center;
  `}
`;

export const PokeStatsTitle = styled.h3`
  ${({ theme: { typography} }) => css`
    font-size: ${typography.fontSize.mediumSize};
    margin: 0;
  `}
`;

export const PokeStatsContainer = styled.div`
  ${({ theme: { unit} }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: ${unit * 1.5}px;
  `}
`;

export const StatWrap = styled.div`
  ${({ theme: { unit, colors, radius} }) => css`
    display: flex;
    flex-direction: column;
    gap: ${unit *0.5}px;
    padding: ${unit * 0.25}px;
    background-color: ${colors.dustyPink};
    border-radius: ${unit * 2.5}px;
    align-items: center;
  `}
`;

export const StatName = styled.div<{bgColor: string}>`
  ${({ theme: { typography, radius, unit, colors}, bgColor }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${typography.fontSize.smSize};
    border-radius: ${radius.rCircle};
    background-color: ${colors[bgColor as keyof typeof colors]};
    padding: ${unit * 0.25}px;
    width: 30px;
    height: 30px;
    color: ${colors.white};
  `}
`;

export const StatValue = styled.span`
  ${({ theme: { typography, radius, unit} }) => css`
    font-size: ${typography.fontSize.mainSize};
  `}
`;

export const AbilitiesWrapper = styled.div`
  ${({ theme: { unit} }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${unit * 1.5}px;
  `}
`;

export const AbilitiesTitle = styled.h3`
  ${({ theme: { typography} }) => css`
    font-size: ${typography.fontSize.mediumSize};
    margin: 0;
  `}
`;

export const AbilitiesContainer = styled.div`
  ${({ theme: { unit} }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: ${unit * 1.5}px;
  `}
`;

export const EvolutionRow = styled.div`
  ${({ theme: { unit} }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    gap: ${unit * 2}px;
  `}
`;

export const PokemonChainItem = styled.div`
  ${({ theme: { unit, colors, radius} }) => css`
    display: flex;
    flex-direction: column;
    gap: ${unit}px;
    align-items: center;
    background-color: ${colors.dustyPink};
    border-radius: ${radius.r10};
    padding-bottom: 10px;
    cursor: pointer;

    &:hover {
      border: 1px solid ${colors.brown};
    }
  `}
`;

export const PokemonChainImg = styled.img`
  ${({ theme: { unit} }) => css`
    width: 100%;
    aspect-ratio: 1/1;
  `}
`;
