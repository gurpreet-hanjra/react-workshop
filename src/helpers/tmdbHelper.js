import axios from 'axios';

const api_endpoint = 'https://api.themoviedb.org/3/search/movie?';
const api_key = '29429e676b58f45f33680ba6e5a09f4a';

const tmdbHelper = {
  getMovies: function (movie) {
    return axios.get(`${api_endpoint}api_key=${api_key}&query=${movie}`);
  }
}

export default tmdbHelper;
