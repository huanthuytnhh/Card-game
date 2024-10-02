import React from "react";
import { useRoom, RoomProvider } from "../contexts/RoomContext.jsx";
// import { RoomProvider } from "../contexts/RoomContext.jsx";
const RoomItem = ({ room }) => {
  const { handleJoinRoom } = useRoom();
  const { id, name, players, maxPlayers, status, host } = room;
  const isFull = players >= maxPlayers;

  // Placeholder avatars (can be replaced with actual player avatars)
  const playerAvatars = new Array(players).fill(
    "https://via.placeholder.com/30"
  );

  return (
    <div className="flex justify-between items-center bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">
          {players}/{maxPlayers} players
        </p>
        <p className={`text-sm ${isFull ? "text-red-500" : "text-green-500"}`}>
          {isFull ? "Room Full" : status}
        </p>
        <p className="text-xs text-gray-400">Host: {host}</p>
        {/* Display player avatars */}
        <div className="flex space-x-2 mt-2">
          {playerAvatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt="Player Avatar"
              className="w-8 h-8 rounded-full"
            />
          ))}
        </div>
      </div>
      <button
        onClick={() => handleJoinRoom(id)}
        disabled={isFull}
        className={`px-4 py-2 rounded ${
          isFull
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-500 text-white"
        }`}
      >
        {isFull ? "Full" : "Join"}
      </button>
    </div>
  );
};

export default RoomItem;
