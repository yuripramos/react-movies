import styled, { css } from "styled-components";
import {
  white,
  black50,
  blue,
  blue20,
  white20,
  lightBlack,
  darkBlue,
  darkGreen
} from "../../../styles/settings";
import { rem, media } from "../../../styles/tools";

export const FilterWrapper = styled.form`
  font-family: "Lato Bold", "Lato";
  width: 100%;
  background-color: ${darkBlue};
  box-shadow: 0 ${rem(1)} ${rem(12)} ${rem(6)} rgba(211, 225, 232, 0.13);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10001;
  font-size: ${rem(11)};
  font-weight: 500;
  line-height: 1.45;
  text-transform: uppercase;

  ${media.md(css`
    margin: ${rem(10)} 0;
    background-color: ${white};
    position: static;
    height: ${rem(72)};
    align-items: center;
    justify-content: flex-start;
    display: flex;
    border-radius: ${rem(4)};
    padding: 0 ${rem(15)};
  `)};
`;

export const FilterIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${rem(26)};
  height: ${rem(26)};
  margin: ${rem(26)};
  margin-right: 0;
  border-radius: ${rem(4)};
  color: ${white};
  background: ${darkGreen};

  ${({ hasFilter }) =>
    !hasFilter &&
    css`
      background: #427fc4;
    `};

  ${media.md(css`
    color: ${blue};
    background: ${white20};
    margin: 0;
  `)};
`;

export const FilterLabel = styled.h1`
  color: ${white};
  line-height: 1.45;
  font-size: ${rem(14)};
  padding-left: ${rem(14)};

  ${media.md(css`
    color: ${blue};
  `)};
`;

export const FilterDescription = styled.span`
  text-transform: none;
  margin-left: ${rem(8)};

  ${media.md(css`
    display: none;
  `)};
`;

export const FilterShowHide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: ${rem(26)};
  height: ${rem(26)};
  margin-right: ${rem(26)};
  color: ${white};
  transform: rotate(180deg);

  ${media.md(css`
    display: none;
  `)};

  ${({ isShown }) =>
    isShown &&
    css`
      transform: rotate(0deg);
    `};
`;

export const RadioLabel = styled.h2`
  letter-spacing: 0.5;
  color: ${black50};
  padding-right: ${rem(18)};
  text-align: left;
`;

export const FilterGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-items: center;
  padding: ${rem(20)} 0;

  ${media.md(css`
    padding: 0 ${rem(20)};
  `)};
`;

export const FilterGroupCombos = styled.div`
  cursor: default;
  display: flex;
  align-items: center;
`;

export const RadioButtion = styled.input`
  border: solid ${rem(1)} ${lightBlack};
  margin-right: ${rem(7)};
  margin-bottom: ${rem(2.5)};
  width: ${rem(12)};
  height: ${rem(12)};
`;

export const FilterContentMobileWrapper = styled.div`
  align-items: center;
  flex-grow: 1;
  overflow: hidden;
  height: 0;
  transition: height 0.2s linear;
  background: ${blue20};

  ${({ isShown }) =>
    isShown &&
    css`
      height: calc(100vh - ${rem(78)});
      padding: 0 ${rem(15)};
      text-align: center;

      ${FilterGroup} {
        background: ${white};
        padding: ${rem(15)};
        margin: ${rem(15)} 0;
      }

      ${RadioLabel} {
        width: ${rem(60)};
        padding: 0;
      }
    `};

  ${media.md(css`
    display: flex;
    overflow: visible;
    height: auto;
    background: ${white};

    ${({ isShown }) =>
      isShown &&
      css`
        padding: 0;

        ${FilterGroup} {
          padding: 0;
          margin: 0;
        }

        ${RadioLabel} {
          width: auto;
          padding-right: ${rem(18)};
        }
      `};
  `)};
`;
