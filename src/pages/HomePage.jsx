import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page flex flex-col mt-20 justify-center items-center">
      <h1>Welcome to Tiến Lên Game!</h1>
      <p>Start playing now!</p>
      <Link to="/gameroom">
        <button>Go to Game Room</button>
      </Link>
      <Link to="/friends">
        <button>Friends List</button>
      </Link>
      <Link to="/profile">
        <button>Your Profile</button>
      </Link>
    </div>
  );
};

export default HomePage;
