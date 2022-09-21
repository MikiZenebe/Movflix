const API = "7df0012a83107f367e7d00f3973c72c2";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API}&language=en-US&page=1`,
};

export default requests;
