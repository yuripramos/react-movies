import axios from "axios";
import { API_URL } from "../../utils/constants";

export async function getAuthors() {
  return axios
    .get(`${API_URL}/5be5e3ae2f00005b000fc3f6`)
    .then(resp => resp.data);
}

export async function getArticles() {
  return axios
    .get(`${API_URL}/5be5e3fa2f000082000fc3f8`)
    .then(resp => resp.data);
}
