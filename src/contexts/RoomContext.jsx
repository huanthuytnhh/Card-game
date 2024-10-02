import React, { createContext, useContext, useState, useEffect } from "react";

// Create the RoomContext
const RoomContext = createContext();

// Custom hook to use RoomContext in components
export const useRoom = () => {
  return useContext(RoomContext);
};

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        // Simulate fetching data from an API
        const fetchedRooms = [
          {
            id: 1,
            name: "Room 101",
            players: 5,
            maxPlayers: 10,
            status: "Available",
            host: "Alice",
          },
          {
            id: 2,
            name: "Room 202",
            players: 3,
            maxPlayers: 10,
            status: "Available",
            host: "Bob",
          },
          {
            id: 3,
            name: "Room 303",
            players: 10,
            maxPlayers: 10,
            status: "Full",
            host: "Charlie",
          },
          {
            id: 4,
            name: "Room 404",
            players: 2,
            maxPlayers: 10,
            status: "Available",
            host: "David",
          },
        ];

        setRooms(fetchedRooms);
        setFilteredRooms(fetchedRooms);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }, 1000);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const searchResults = rooms.filter((room) =>
      room.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredRooms(searchResults);
  };

  const handleFilter = (filter) => {
    const filtered =
      filter === "all"
        ? rooms
        : rooms.filter((room) =>
            filter === "available"
              ? room.status === "Available"
              : room.status === "Full"
          );
    setFilteredRooms(filtered);
  };

  const handleJoinRoom = (roomId) => {
    console.log(`Joining room with ID: ${roomId}`);
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        filteredRooms,
        searchTerm,
        handleSearch,
        handleFilter,
        loading,
        error,
        handleJoinRoom,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
