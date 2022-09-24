import React from "react";
import requests from "../Requests";

import Row from "../components/Row";
import Main from "../components/Main";

function Home() {
  return (
    <>
      <Main />
      <Row rowID="1" title="UpComing" fetchData={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchData={requests.requestPopular} />
      <Row rowID="3" title="Top Rated" fetchData={requests.requestTopRated} />
      <Row rowID="4" title="Trending" fetchData={requests.requestTrending} />
      <Row rowID="5" title="Action" fetchData={requests.requestActionMovies} />
      <Row rowID="6" title="Comedy" fetchData={requests.requestComedyMovies} />
      <Row
        rowID="7"
        title="Romance"
        fetchData={requests.requestRomanceMovies}
      />
      <Row rowID="8" title="Horror" fetchData={requests.requestHorror} />
      <Row
        rowID="9"
        title="Documentaries"
        fetchData={requests.requestDocumentaries}
      />
    </>
  );
}

export default Home;
