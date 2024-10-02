import React from "react";
import Search from "./Search";

function Hero() {
  return (
    <div className="mb-44">
      <div className="flex  flex-col items-center p-10 py-20 gap-6 h-[600px] w-full bg-[#eef0fc]">
        <h2 className="text-lg text-center">Welcome to our game !</h2>
        <h2 className="text-[60px] text-center">What you are finding</h2>
        <Search />
        <img src="/banner.png" alt="tesla" className="mt-0 w-1/1 " />
      </div>
    </div>
  );
}

export default Hero;
