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

  //Make three dots or read more
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={`http://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border border-yellow-300 py-2 px-5 bg-yellow-300 text-black ">
              Play
            </button>
            <button className="border border-yellow-300 px-5 py-2 ml-4">
              Watch Later
            </button>
          </div>

          <p className="text-gray-400">Released: {movie?.release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 200)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
