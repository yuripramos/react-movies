import styled from "styled-components";
import { rem } from "../../../styles/tools";
// import { green } from "../../../styles/settings";
// import { IconWrapper } from "../../Content/MovieDetail/styles";

export const Wrapper = styled.div`
  display: inline-flex;
  width: 100%;
  text-align: center;
  margin: 25px 0;
`;

export const Search = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const IconWrapper = styled.div`
  transform: translateY(6px);
  width: ${rem(50)};
  height: ${rem(46)};
`;

export const ButtonWrapper = styled.div`
  margin-left: ${rem(-29)};
  & > button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
