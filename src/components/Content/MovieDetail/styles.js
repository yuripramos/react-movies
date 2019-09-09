import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";
import {
  trueWhite,
  darkGreen,
  grey90,
  black50
} from "../../../styles/settings";
import { InputWrapper, InputField } from "../../common/Input/styles";

export const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  height: ${rem(40)};
  transition: all 0.2s linear;
  ${media.md(css`
    padding: 0 ${rem(60)};
  `)};
  ${media.lg(css`
    text-align: left;
  `)};
  ${({ large }) =>
    large &&
    css`
      height: 100%;
    `};
`;

export const DashboardWrapper = styled.div`
  background: ${trueWhite};
  padding: ${rem(15)} 0;

  ${media.md(css`
    padding: ${rem(25)} 0;
  `)};
`;
export const Movie = styled.div`
  width: 245px;
  height: 350px;
  display: inline-block;
  cursor: pointer;

  ${({ detailed }) =>
    detailed &&
    css`
      width: 700px;
      display: inline-flex;
      flex-flow: row wrap;
    `};
  ${({ last }) =>
    last &&
    css`
      padding-bottom: ${rem(15)};
    `};
`;

export const MainTitle = styled.h1`
  color: ${black50};
`;

export const Image = styled.img`
  margin: 0 auto;
  height: 300px;
  ${({ detailed }) =>
    detailed &&
    css`
      margin: auto;
      height: 400px;
      width: 300px;
    `};
`;

export const FooterInfo = styled.span`
  color: ${grey90};
  font-size: ${rem(14)};
`;

export const FooterWrapper = styled.div`
  display: inline-grid;
  ${({ detailed }) =>
    detailed &&
    css`
      display: inline-flex;
      width: 100%;
      justify-content: space-between;
      height: ${rem(40)};
      padding: 0 ${rem(15)} 0 ${rem(5)};
      & > span {
        font-size: ${rem(15)} !important;
      }
    `};
`;

export const Spacer = styled.div`
  margin-top: ${rem(50)};
`;

export const Title = styled.h1`
  font-size: ${rem(24)};
  margin: ${rem(25)} 0 ${rem(10)};
  color: ${darkGreen};
  width: 80%;
`;

export const Content = styled.div`
  padding: 0 ${rem(25)} 0 0;
  margin-top: ${rem(10)};
  overflow: hidden;
  height: 140px;

  ${InputField} {
    height: ${rem(48)};
    padding-left: ${rem(9.6)};
  }

  ${InputWrapper} {
    margin: ${rem(9)} ${rem(6)} ${rem(9)} 0;
    height: ${rem(48)};
  }
  ${({ detailed }) =>
    detailed &&
    css`
      display: inline-flex;
      width: 52%;
      height: ${rem(400)};
      padding: 0 ${rem(10)};
    `};
`;

export const FloatingText = styled.div`
  display: inline-flex;
  color: ${grey90};
  width: 100%;
  margin-top: ${rem(12)};
`;

export const AvailableBalBox = styled.span`
  width: 100%;
  height: ${rem(45)};
  font-size: ${rem(18)};
  font-family: Lato;
  transform: translateY(-10px);
`;

export const RowsWrapper = styled.div`
  margin-top: ${rem(12.5)};
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${rem(4)};
  ${media.md(css`
    padding: ${rem(20)};
  `)};
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  float: right;
  margin: ${rem(-50)} ${rem(-15)};
`;
