import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";
import {
  black,
  grey10,
  black40,
  lighestgrey,
  darkestBlue
} from "../../../styles/settings";

export const Title = styled.span`
  font-size: ${rem(23)};
  color: ${darkestBlue};
  text-align: center;
  font-weight: 700
  width: 100%;
  padding: ${rem(10)};
`;

export const ListWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  background: ${lighestgrey};
  color: ${black};
  height: 93vh;
  min-width: ${rem(200)};
  ${media.lg(css`
    width: ${rem(360)};
  `)};
  align-content: flex-start;
  overflow-y: auto;
`;

export const Empty = styled.div`
  width: 100%;
`;

export const Item = styled.div`
  width: 100%;
  padding: ${rem(18)} ${rem(30)};
  border-bottom: solid 1px ${grey10};
  display: inline-flex;
`;

export const Image = styled.img`
  margin: 0 auto;
  height: 300px;
  cursor: pointer;
`;

export const Name = styled.div`
  width: 100%;
  text-align: center;
  padding: ${rem(10)} 0;
  text-transform: capitalize;
  text-overflow: ellipsis;
  font-size: ${rem(16)};
  font-weight: bold;

  /* Required for text-overflow to do anything */
  white-space: nowrap;
  overflow: hidden;
`;

export const Description = styled.div`
  font-size: ${rem(14)};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 30px;
  font-weight: 700;
  color: ${black40};
  ${({ recipient }) =>
    recipient &&
    css`
      color: ${black40};
      font-size: ${rem(12)};
      font-weight: 400;
      justify-content: flex-start;
    `};
`;

export const InfoStyle = styled.div`
  font-size: ${rem(11)};
  width: 100%;
  display: inline-flex;
  color: ${black};
  padding: ${rem(5)} 0;
  font-weight: 300;
  height: ${rem(15)};
`;
export const Info = styled.div`
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  margin-top: ${rem(-15)};

  ${({ spacing }) =>
    spacing &&
    css`
      margin-left: 10px;
    `};
`;
