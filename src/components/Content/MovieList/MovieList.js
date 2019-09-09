import React from "react";
import { arrayOf, object, func } from "prop-types";
import { BASE_URL_IMG } from "../../../utils/constants";

import {
  Title,
  Item,
  ListWrapper,
  // Description,
  Info,
  // InfoStyle,
  Name,
  Empty,
  Image
} from "./styles";

function MovieList({ moviesList, displayMovieDetails }) {
  const isFilled = moviesList && moviesList.length > 0;
  return (
    <ListWrapper>
      <Title>Discover</Title>
      {isFilled ? (
        moviesList.map((e, i) => (
          <Item key={i} onClick={() => displayMovieDetails(e.id)}>
            <Info>
              <Name>{e.original_title}</Name>
              <Image src={`${BASE_URL_IMG}${e.poster_path}`} />
            </Info>
          </Item>
        ))
      ) : (
        <Empty>No Movies to display</Empty>
      )}
    </ListWrapper>
  );
}

export default MovieList;

MovieList.propTypes = {
  moviesList: arrayOf(object),
  displayMovieDetails: func
};
