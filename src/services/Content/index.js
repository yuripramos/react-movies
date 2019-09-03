import axios from "axios";
import { API_URL, API_KEY } from "../../utils/constants";

export async function getMovies() {
  return axios
    .get(
      `${API_URL}?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    )
    .then(resp => resp.data);
}

export async function getArticles() {
  return axios
    .get(`${API_URL}/5be5e3fa2f000082000fc3f8`)
    .then(resp => resp.data);
}
