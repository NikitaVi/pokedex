import styled, { css } from "styled-components";

export const Header = styled.header`
${({ theme: { unit, colors } }) => css`
  position: sticky;
  height: ${unit * 10}px;
  background-color: ${colors.peachPink};
  width: 100%;
  z-index: 1001;
`}
`;