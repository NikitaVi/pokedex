import styled, {css} from "styled-components";

export const DetailPageWrapper = styled.div`
  ${({ theme: { unit, colors } }) => css`
    display: flex;
    position: relative;
    height: 100%;
    min-height: calc(100vh - 80px);
    flex-direction: column;
    background-color: ${colors.red};
  `}
`;

export const InfoWrapper = styled.div`
  ${({ theme: { unit, colors } }) => css`
    display: flex;
    position: absolute;
    top: 20%;
    left: 0;
    right: 0;
    min-height: 100vh;
    flex-direction: column;
    background-color: ${colors.white};
  `}
`;
