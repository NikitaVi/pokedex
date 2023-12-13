import styled, {css} from "styled-components";

export const GridWrapper = styled.div`
  ${({ theme: { unit, breakpoints } }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${unit *  2.5}px;
    padding: ${unit * 2.5}px ${unit * 5}px ${unit * 5}px;

    @media (max-width: ${breakpoints.desktopXs}) {
      grid-template-columns: 1fr 1fr;
      padding: 20px 0;
    }
  `}
`;

export const GridPageWrapper = styled.div`
  ${({ theme: { breakpoints } }) => css`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;

    @media (max-width: ${breakpoints.tabletMd}) {
      flex-wrap: initial;
      flex-direction: column;
    }
  `}
`;
