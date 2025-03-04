import React from "react";
import { AuthContext } from "../Context/AuthContext.jsx";
import { useContext } from "react";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-purple-950 text-center h-screen">
      {user.name !== "" ? (
        <h1 className="pt-28 text-3xl font-bold text-white ">
          Your are logged in
        </h1>
      ) : (
        <h1 className="pt-28 text-3xl font-bold text-white ">
          Your are not logged in.
        </h1>
      )}
    </div>
  );
};

export default Home;
