import styled, {css} from "styled-components";

export const CardWrapper = styled.button`
  ${({ theme: { unit, colors, radius } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    justify-self: stretch;
    padding: ${unit * 2.5}px;
    border-radius: ${radius.r10};
    background-color: ${colors.violet};
    text-decoration: none;
    cursor: pointer;
    border: none;
    align-items: center;
    
    &:hover {
      border: 1px solid ${colors.brown};
    }
  `}
`;

export const CardTitle = styled.h3`
  ${({ theme: { typography,colors } }) => css`
    font-size: 20px;
    line-height: ${typography.lineHeight.sm};
    text-align: center;
    color: ${colors.black};
  `}
`;

export const TypesWrapper = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 18px;
  `}
`;

export const CardImage = styled.img`
  ${({ theme: { radius } }) => css`
    width: 60%;
    height: auto;
    border-radius: ${radius.r4};
    max-height: 340px;
  `}
`;
