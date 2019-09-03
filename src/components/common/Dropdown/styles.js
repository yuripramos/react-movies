import styled, { css } from "styled-components";
import { rem } from "../../../styles/tools";
import {
  white,
  grey30,
  black50,
  darkBlue,
  red
} from "../../../styles/settings";
import { Label } from "../../common/Input/styles";

export const DropdownField = styled.select`
  width: 100%;
  height: ${rem(30)};
  border-radius: ${rem(4)};
  background-color: ${white};
  border: solid ${rem(1)} ${grey30};
  font-family: Lato;
  font-size: ${rem(13)};
  letter-spacing: ${rem(0.8)};
  color: ${black50};
  padding: ${rem(5)} ${rem(15)} 0 ${rem(6.4)};
  transition: 0.3s padding, 0.3s border;
  box-shadow: none;

  ::-ms-clear {
    display: none !important;
  }

  :focus {
    outline: none;
    border: solid ${rem(1)} ${darkBlue};
  }

  ${({ isEmpty, tinyLabels }) => !isEmpty && tinyLabels && revealContent2};
  :not(:focus) {
    ${({ tinyLabels, isEmpty }) => tinyLabels && !isEmpty && revealContent3};
  }
`;

export const DropdownWrapper = styled.div`
  letter-spacing: ${rem(0.1)};
  display: inline-block;
  position: relative;
  margin: 0 ${rem(6)} ${rem(6)} 0;

  select:not(:focus) {
    ${({ valid }) =>
      valid === false &&
      css`
        border-color: ${red};
      `};
  }

  ${({ width }) =>
    width &&
    css`
      width: ${rem(width)};
    `};
`;

const revealContent2 = css`
  ~ ${Label} {
    top: ${rem(10)};
    font-family: Lato Bold;
    font-size: ${rem(11)};
    letter-spacing: ${rem(0.1)};
    text-align: left;
    color: ${darkBlue};
  }
`;

const revealContent3 = css`
  ~ ${Label} {
    top: ${rem(12)};
    color: ${black50};
  }
`;
