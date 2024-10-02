import React from "react";

const AvatarGroup = ({ players, currentPlayerIndex }) => {
  return (
    <div className="flex space-x-2">
      {players.map((player, index) => (
        <div key={player.id} className="relative w-12 h-12">
          <img
            src={player.avatar} // Ensure each player object has an avatar property
            alt={`Player ${player.id}`}
            className={`rounded-full w-full h-full object-cover ${
              currentPlayerIndex === index ? "border-2 border-blue-500" : ""
            }`}
          />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-center">
            {/* Player {player.id} */}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
