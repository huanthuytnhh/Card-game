import React from "react";
import { useRoom, RoomProvider } from "../contexts/RoomContext.jsx";
import RoomItem from "./RoomItem";

const JoinRoom = () => {
  const {
    filteredRooms = [], // Ensure filteredRooms has a default value if undefined
    searchTerm = "",
    handleSearch,
    handleFilter,
    loading = false,
    error = null,
  } = useRoom() || {}; // Use empty object as fallback

  if (loading) return <div className="text-center">Loading rooms...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Join a Room</h2>

      {/* Search Bar */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for rooms..."
        className="w-full px-4 py-2 mb-4 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      />

      {/* Filter Buttons */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => handleFilter("all")}
          className="px-3 py-1 mx-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          All
        </button>
        <button
          onClick={() => handleFilter("available")}
          className="px-3 py-1 mx-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Available
        </button>
        <button
          onClick={() => handleFilter("full")}
          className="px-3 py-1 mx-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Full
        </button>
      </div>

      {/* Room List */}
      <div className="space-y-4">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => <RoomItem key={room.id} room={room} />)
        ) : (
          <p className="text-center">No rooms found.</p>
        )}
      </div>
    </div>
  );
};

export default JoinRoom;
