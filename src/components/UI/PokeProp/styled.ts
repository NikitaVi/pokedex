import styled, {css} from "styled-components";

export const PokeProWrap = styled.div`
  ${({ theme: { unit, typography} }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${unit * 0.5}px;
    font-size: ${typography.fontSize.mainSize};
  `}
`;


export const PokeProperty = styled.div<{bgColor?: string}>`
  ${({ theme: { radius, colors, unit}, bgColor }) => css`
    width: 100%;
    height: max-content;
    border-radius: ${radius.r10};
    background-color: ${bgColor ? bgColor : colors.dustyPink};
    text-align: center;
    padding: 0 ${unit * 0.5}px;
  `}
`;
