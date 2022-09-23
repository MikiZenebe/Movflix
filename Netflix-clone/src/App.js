import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* <AuthContextProvider> */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      {/* </AuthContextProvider> */}
    </>
  );
}

export default App;
