import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between p-4 z-[100] absolute w-full">
      <h1 className="text-yellow-300 text-4xl font-bold cursor-pointer">
        MOVFLIX
      </h1>

      <div>
        <button className="text-white pr-4 font-bold">Sign In</button>
        <button className="bg-yellow-300 px-6 py-2 rounded cursor-pointer font-bold hover:scale-110 transition-all 0.5s">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
