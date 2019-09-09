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
export const Article = styled.div`
  width: 245px;
  height: 350px;
  display: inline-block;

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
`;

export const FooterInfo = styled.span`
  color: ${grey90};
  font-size: ${rem(14)};
`;

export const FooterWrapper = styled.span`
  display: inline-grid;
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
  /* white-space: nowrap; */
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
`;

export const TitleWrapper = styled.div`
  padding: 0;
  width: 100%;
  ${({ withRows }) =>
    withRows &&
    css`
      margin: ${rem(-15)} ${rem(-15)};
    `};
  ${({ bigMargin }) =>
    bigMargin &&
    css`
      margin-bottom: ${rem(6.2)};
    `};
  ${({ lowMargin }) =>
    lowMargin &&
    css`
      margin-bottom: ${rem(-7)};
    `};
  ${({ isNewTransfer }) =>
    isNewTransfer &&
    css`
      padding: 15px;
      display: inline-flex;
      justify-content: space-between;
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

export const ShowHideWrapper = styled.div`
  height: 0;
  transition: height 0.2s linear;
  overflow: hidden;

  ${({ height }) =>
    height &&
    css`
      height: ${height + 55}px;
    `};
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  float: right;
  margin: ${rem(-50)} ${rem(-15)};
`;
