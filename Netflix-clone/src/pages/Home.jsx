import React from "react";
import requests from "../Requests";

import Row from "../components/Row";
import Main from "../components/Main";

function Home() {
  return (
    <>
      <Main />
      <Row title="UpComing" fetchData={requests.requestUpcoming} />
      <Row title="Popular" fetchData={requests.requestPopular} />
      <Row title="Top Rated" fetchData={requests.requestTopRated} />
      <Row title="Trending" fetchData={requests.requestTrending} />
      <Row title="Action" fetchData={requests.requestActionMovies} />
      <Row title="Comedy" fetchData={requests.requestComedyMovies} />
      <Row title="Romance" fetchData={requests.requestRomanceMovies} />
      <Row title="Horror" fetchData={requests.requestHorror} />
      <Row title="Documentaries" fetchData={requests.requestDocumentaries} />
    </>
  );
}

export default Home;
