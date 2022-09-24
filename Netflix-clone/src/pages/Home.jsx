import React from "react";
import requests from "../Requests";

import Row from "../components/Row";
import Main from "../components/Main";

function Home() {
  return (
    <>
      <Main />
      <Row
        key={1}
        rowID="1"
        title="UpComing"
        fetchData={requests.requestUpcoming}
      />
      <Row
        key={2}
        rowID="2"
        title="Popular"
        fetchData={requests.requestPopular}
      />
      <Row
        key={3}
        rowID="3"
        title="Top Rated"
        fetchData={requests.requestTopRated}
      />
      <Row
        key={4}
        rowID="4"
        title="Trending"
        fetchData={requests.requestTrending}
      />
      <Row
        key={5}
        rowID="5"
        title="Action"
        fetchData={requests.requestActionMovies}
      />
      <Row
        key={6}
        rowID="6"
        title="Comedy"
        fetchData={requests.requestComedyMovies}
      />
      <Row
        key={7}
        rowID="7"
        title="Romance"
        fetchData={requests.requestRomanceMovies}
      />
      <Row
        key={8}
        rowID="8"
        title="Horror"
        fetchData={requests.requestHorror}
      />
      <Row
        key={9}
        rowID="9"
        title="Documentaries"
        fetchData={requests.requestDocumentaries}
      />
    </>
  );
}

export default Home;
