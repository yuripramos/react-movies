import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";
import { black } from "../../styles/settings";

export const ContentWrapper = styled.div`
  text-align: center;
  color: #000;
  padding: 0;
  min-height: ${rem(250)};
  width: 100%;
  display: inline-flex;
  height: 88.5vh;

  margin: 0 auto;
  ${media.lg(css`
    height: 92vh;
  `)};
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: ${rem(30)};
`;

export const Column = styled.div`
  color: ${black};
  justify-content: space-between;
  display: inline-flex;
  flex-wrap: wrap;
  ${media.xs(css`
    margin-left: ${rem(-3)};
  `)};
  ${({ width }) =>
    width &&
    css`
      width: ${width}%;
    `};
  ${({ adjust }) =>
    adjust &&
    css`
      transform: translateY(${adjust}px);
    `};
`;
