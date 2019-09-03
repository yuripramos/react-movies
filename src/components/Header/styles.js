import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";
import { white, darkerBlue } from "../../styles/settings";

export const HeaderWrapper = styled.header`
  height: 10vh;
  padding-top: ${rem(10)};
  background: ${darkerBlue};
  text-align: center;
  ${media.md(css`
    text-align: center;
  `)};
  ${media.lg(css`
    height: ${rem(58)};
    padding-top: ${rem(6)};
  `)};
`;

export const Title = styled.h1`
  font-size: ${rem(25)};
  color: ${white};
  text-shadow: 0.1875rem 0.1rem rgba(132, 129, 129, 0.15);
`;

export const TitleWrapper = styled.div`
  display: inline-flex;
  width: 50%;
  font-size: ${rem(28)};
  ${media.xs(css`
    width: 95%;
    justify-content: flex-end;
  `)};
`;

export const SubTitle = styled.h2`
  font-size: ${rem(10)};
  text-align: center;
  color: ${white};
  text-shadow: ${rem(3)} ${rem(3)} rgba(0, 0, 0, 0.25);
  ${media.md(css`
    font-size: ${rem(24)};
    text-align: left;
  `)};
`;

export const InputWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ListIcons = styled.div`
  display: flex;
  width: ${rem(200)};
  margin-top: ${rem(15)};
`;

export const FeaturedImage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const ImgHeader = styled.img`
  width: ${rem(60)};
  height: ${rem(60)};
  ${media.lg(css`
    width: ${rem(80)};
    height: ${rem(80)};
  `)};
`;
