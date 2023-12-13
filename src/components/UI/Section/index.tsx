import styled, {css} from "styled-components";

export const Section = styled.section<{ background?: string }>`
  ${({ theme: { unit, colors, breakpoints }, background }) => css`
    background-color: ${background || colors.fairPink};
    padding-bottom: ${unit * 10}px;
    padding: 0 ${unit * 5}px;
  `}
`;

