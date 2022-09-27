import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight, MdOutlineClose } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

import { db } from "../firebase";
import { onSnapshot, doc, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";

function SavedShows() {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  const [trailerUrl, setTrailerUrl] = useState("");

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (item) => {
    console.log("Miki");
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(item?.title || item?.name || item?.original_name)
        .then((url) => {
          //https://www.youtube.com/watch?v=XtMThy8QKqU
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  //Remove show from my account
  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className=" text-gray-300 font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item) => (
            <div
              key={item.id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p
                  onClick={() => handleClick(item)}
                  className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center"
                >
                  {item?.title}
                </p>

                <p
                  onClick={() => deleteShow(item.id)}
                  className="absolute text-gray-300 top-4 right-4"
                >
                  <MdOutlineClose />
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

export default SavedShows;
