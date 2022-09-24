import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchData, rowID }) {
  const [movies, setMovies] = useState([]);
  const [likes, setLikes] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    axios.get(fetchData).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchData]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          //https://www.youtube.com/watch?v=XtMThy8QKqU
          const urlParams = new URLSearchParams(new URL(url).search);
          const bitch = urlParams.get("v");

          console.log(bitch);
        })
        .catch((error) => console.log(error));
    }
  };

  //Make a left and right slider
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie) => (
            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
              <img
                onClick={() => handleClick(movie)}
                key={movie.id}
                className="w-full h-auto block"
                src={`http://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                alt={movie?.title}
              />

              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {movie?.title}
                </p>

                <p className="absolute top-4 left-4 text-yellow-300">
                  {likes ? <FaHeart /> : <FaRegHeart />}
                </p>
              </div>
            </div>
          ))}
        </div>

        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white right-0 rounded-full  absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
      <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>
    </>
  );
}

export default Row;
