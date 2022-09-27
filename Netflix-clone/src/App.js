import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import { AuthContextProvider } from "./context/AuthContext";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route element={<Account />} path="/account" exact />
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
