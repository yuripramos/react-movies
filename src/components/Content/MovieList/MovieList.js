import React from "react";
import { arrayOf, object } from "prop-types";
import {
  Title,
  // Item,
  ListWrapper
  // Description,
  // Info,
  // InfoStyle,
  // Name,
  // Empty
} from "./styles";

function MovieList({ moviesList }) {
  // const isFilled = moviesList && moviesList.length > 0;
  console.log("fetch list", moviesList);
  return (
    <ListWrapper>
      <Title>Discover</Title>
      sadasdasdasdasd
      {/* {isFilled ? (
        moviesList.map((e, i) => (
          <Item key={i}>
            <Info>
              <Description recipient></Description>
              <Name>{e.title}</Name>
              <InfoStyle>{`Published at:`}</InfoStyle>
            </Info>
          </Item>
        ))
      ) : (
        <Empty>No Movies to display</Empty>
      )} */}
    </ListWrapper>
  );
}

export default MovieList;

MovieList.propTypes = {
  moviesList: arrayOf(object)
};
