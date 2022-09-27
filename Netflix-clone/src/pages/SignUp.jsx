import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function SignUp() {
  const { user, signUp } = UserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className=" sm:block absolute w-full h-full object-cover"
          src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/netflix.jpg"
          alt=""
        />

        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>

        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>

              <form
                className="w-full flex flex-col py-4"
                onSubmit={handleSignUp}
              >
                <input
                  className="p-3 my-2 bg-gray-700 rounded outline-none"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded outline-none"
                  type="password"
                  placeholder="Password (min 6 char)"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className="bg-yellow-300 text-black font-bold py-3 my-6 rounded">
                  Sign Up
                </button>

                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2 cursor-pointer" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>

                <p className="py-8">
                  <span className="text-gray-600">Have an account? </span>
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
