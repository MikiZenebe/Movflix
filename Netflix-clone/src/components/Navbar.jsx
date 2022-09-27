import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./Nav.css";

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [show, handleshow] = useState(false);

  //Logout logic
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div
      className={`nav flex justify-between p-4 z-[100] absolute w-full ${
        show && "nav_black"
      }`}
    >
      <Link to="/">
        <h1 className="text-yellow-300 text-4xl font-bold cursor-pointer">
          MIKFLIX
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4 font-bold">My Account</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-yellow-300 px-6 py-2 rounded cursor-pointer font-bold hover:scale-110 transition-all 0.5s"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4 font-bold">Sign In</button>
          </Link>

          <Link to="/signup">
            <button className="bg-yellow-300 px-6 py-2 rounded cursor-pointer font-bold hover:scale-110 transition-all 0.5s">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
