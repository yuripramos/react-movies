import axios from "axios";
import { API_URL, API_KEY } from "../../utils/constants";

export async function getMovies() {
  return axios
    .get(
      `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    )
    .then(resp => resp.data);
}

export async function getQueryMovies(query) {
  return axios
    .get(
      `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then(resp => resp.data);
}
