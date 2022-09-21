import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../Requests";

function Main() {
  const [movies, setMovies] = useState([]);

  //Pick random movie to cover image
  const movie = movies[Math.floor(Math.random() * movies.length)];

  //Fetch movie data with axios
  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  console.log(movie);
  return (
    <div className="w-full h-[550px] text-white">
      <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={`http://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div>
          <button className="border border-gray-300 py-2 px-5 bg-white text-black">
            Play
          </button>
          <button className="border border-gray-300 px-5 py-2 ml-4">
            Watch Later
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
