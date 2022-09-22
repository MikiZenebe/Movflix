const API = "7df0012a83107f367e7d00f3973c72c2";

const requests = {
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API}&language=en-US&page=1`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=2`,
  requestActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=28`,
  requestComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=35`,
  requestRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=10749`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&query=horror&page=1&include_adult=false`,
  requestDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=99`,
};

export default requests;
