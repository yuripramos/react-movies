import React from "react";
import { arrayOf, object, func } from "prop-types";
import { BASE_URL_IMG } from "../../../utils/constants";

import { Title, Item, ListWrapper, Info, Name, Empty, Image } from "./styles";

function MovieList({ moviesList, displayMovieDetails, ClearFilterOnSearch }) {
  const isFilled = moviesList && moviesList.length > 0;
  return (
    <ListWrapper>
      <Title>Discover</Title>
      {isFilled ? (
        moviesList.map((e, i) => (
          <Item
            key={i}
            onClick={() => {
              displayMovieDetails(e.id);
              ClearFilterOnSearch();
            }}
          >
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
  displayMovieDetails: func,
  ClearFilterOnSearch: func
};
