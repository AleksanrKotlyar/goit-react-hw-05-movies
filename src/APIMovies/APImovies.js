import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'a3dd0056fa523609f3ab9fe8602576dd';

async function fetchGenres() {
  if (localStorage.getItem('genresDataArray' !== null)) {
    return;
  }
  try {
    const genresDataArray = await axios.get(
      `/genre/movie/list?language=en-US&api_key=${API_KEY}`
    );
    if (genresDataArray.status !== 200) {
      return;
    }

    localStorage.setItem(
      'genresDataArray',
      JSON.stringify(genresDataArray.data.genres)
    );
  } catch (error) {
    console.log(error);
  }
}

async function getTrending() {
  try {
    const response = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);

    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

async function searchMovies(id) {
  try {
    const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function searchMoviesByQuery(query) {
  try {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&query='${query}'`
    );

    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

async function searchCast(movie_id) {
  try {
    const response = await axios.get(
      `/movie/${movie_id}/credits?api_key=${API_KEY}`
    );

    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
}

async function searchReviews(movie_id) {
  try {
    const response = await axios.get(
      `/movie/${movie_id}/reviews?api_key=${API_KEY}`
    );

    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
export {
  fetchGenres,
  getTrending,
  searchMovies,
  searchMoviesByQuery,
  searchCast,
  searchReviews,
};
