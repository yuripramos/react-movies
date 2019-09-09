import sortBy from "array-sort-by";

export const filterContentByRating = (movies, rating) => {
  const filteredRating = movies.filter(k => k.vote_average >= rating * 2);
  return filteredRating;
};

export const sortByPopularity = arr => sortBy(arr, n => -n.popularity);
