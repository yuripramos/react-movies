import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";
import { lightBlue, green, white, grey, darkBlue } from "../../styles/settings";

export const ButtonTag = styled.button`
  background: white;
  border-radius: ${rem(4)};
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-size: ${rem(12)};
  letter-spacing: ${rem(0.2)};
  line-height: ${rem(45)};
  outline: none;
  padding: 0 ${rem(20)};
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: 0.2s ease-in-out color, 0.2s ease-in-out background,
    0.2s ease-in-out box-shadow, 0.2s ease-in-out border, 0.1s transform;
  white-space: nowrap;
  width: ${props => (props.width ? rem(props.width) : "100%")};
  height: ${props => (props.height ? rem(props.height) : "100%")};
  user-select: none;
  opacity: ${props => (props.opacity && props.disabled ? props.opacity : 1)};
  ${({ width, isPending }) =>
    width &&
    isPending &&
    css`
      min-width: ${rem(width)} !important;
      margin-right: 0 !important;
      text-align: center;
      padding: 0 ${rem(10)} !important;

      ${media.lg(css`
        margin-right: ${rem(20)} !important;
      `)};
    `};

  ${media.md(css`
    width: ${props => (props.width ? rem(props.width) : "auto")};
  `)};

  ${media.lg(css`
    font-size: ${rem(13)};
    padding: 0 ${rem(28)};
    line-height: ${rem(48)};
    padding: ${props => props.paddingSize && rem(props.paddingSize)};
  `)};


  :active {
    transform: translateY(${rem(1)});
  }

  ${({ isCallToAction }) =>
    isCallToAction &&
    css`
      background-color: ${green};
      border: solid ${rem(1)} ${green};
      box-shadow: 0 ${rem(2)} ${rem(7)} ${rem(2)} rgba(117, 214, 184, 0.39);
      color: ${white};
      font-family: "Lato Bold", Lato;

      :hover:not([disabled]) {
        background-color: ${lightBlue};
        border-color: ${lightBlue};
        box-shadow: 0 ${rem(2)} ${rem(7)} ${rem(2)} rgba(51, 204, 208, 0.39);
      }
    `};

  ${({ small }) =>
    small &&
    css`
      font-size: ${rem(11)} !important;
      height: ${rem(40)} !important;
      line-height: ${rem(40)} !important;
    `};

  ${({ disabled, loading, opacity }) =>
    disabled &&
    !loading &&
    opacity &&
    css`
      background-color: ${!opacity && grey};
      opacity: ${opacity};
      box-shadow: none;
      border: solid ${rem(1)} ${grey};
      color: ${white};
      cursor: not-allowed;
      pointer-events: none;
    `};
  ${({ isNewTransfer }) =>
    isNewTransfer &&
    css`
      background-color: ${darkBlue};
      color: ${white};
      border: none;
      box-shadow: 0 4px 7px 0 rgba(49, 117, 189, 0.2);
    `};

  ${({ disabled, loading }) =>
    disabled &&
    loading &&
    css`
      box-shadow: none;
      cursor: not-allowed;
      pointer-events: none;
    `};
  ${({ disabled, loading }) =>
    disabled &&
    !loading &&
    css`
      background-color: ${grey};
      box-shadow: none;
      border: solid ${rem(1)} ${grey};
      color: ${white};
      cursor: not-allowed;
      pointer-events: none;
    `};

  ${({ disabled, loading }) =>
    disabled &&
    loading &&
    css`
      box-shadow: none;
      cursor: not-allowed;
      pointer-events: none;
    `};
`;

export const AnchorTag = styled.a`
  display: flex;
  font-size: ${rem(11)};
  font-weight: bold;
  letter-spacing: ${rem(0.3)};
  text-decoration: none;

  ${({ width, isPending }) =>
    width &&
    isPending &&
    css`
      font-family: Lato !important;
      margin-right: 0 !important;
      min-width: ${rem(width)} !important;
      text-align: center;
      padding: 0 ${rem(10)} !important;
      min-width: ${width} !important;

      ${media.lg(css`
        margin-right: ${rem(20)} !important;
      `)};
    `};
  ${({ noSpan }) =>
    noSpan &&
    css`
      font-family: "Lato Bold";
      letter-spacing: ${rem(0.4)};
      font-size: ${rem(11)};
      font-weight: 600;
      background: red;
    `} :hover {
    opacity: 0.6;
  }
`;

export const AnchorSpan = styled.span`
  padding-right: ${rem(3)};
  ${({ noSpan, opacity }) =>
    noSpan &&
    opacity &&
    css`
      opacity: ${opacity};
      font-family: "Lato Bold";
      color: ${darkBlue};
      letter-spacing: ${rem(0.4)};
      font-size: ${rem(11)};
      font-weight: 600;
    `};
`;
