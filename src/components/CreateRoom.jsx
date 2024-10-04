import { useState } from "react";
import { Button } from "./ui/button"; // Assuming you have a Button component
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation

function CreateRoom({ onCreate }) {
  const [roomName, setRoomName] = useState("");
  const [maxPlayers, setMaxPlayers] = useState(4); // Default max players set to 4
  const navigate = useNavigate(); // React Router hook to navigate

  // Function to increment players
  const incrementPlayers = () => {
    if (maxPlayers < 4) setMaxPlayers(maxPlayers + 1);
  };

  // Function to decrement players
  const decrementPlayers = () => {
    if (maxPlayers > 2) setMaxPlayers(maxPlayers - 1);
  };

  const handleCreateRoom = () => {
    if (roomName.trim()) {
      const newRoom = { name: roomName, maxPlayers };

      // Uncomment this if you need to call onCreate from the parent component
      if (onCreate) {
        onCreate(newRoom); // Call onCreate to handle the room creation logic
      }

      setRoomName(""); // Reset form after creation

      // Navigate to the newly created room view
      navigate(`/room/${newRoom.name}`);
    } else {
      alert("Room name is required");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Create a Room
      </h2>

      {/* Room Name Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Room Name
        </label>
        <input
          type="text"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="Enter room name"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
        />
      </div>

      {/* Max Players Configuration */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Max Players
        </label>
        <div className="flex items-center space-x-4">
          <Button
            onClick={decrementPlayers}
            disabled={maxPlayers <= 2} // Disable button if less than or equal to 2
            className={`px-4 py-2 bg-gray-300 text-gray-700 rounded-lg ${
              maxPlayers <= 2 && "cursor-not-allowed opacity-50"
            }`}
          >
            -
          </Button>
          <span className="text-xl font-semibold">{maxPlayers}</span>
          <Button
            onClick={incrementPlayers}
            disabled={maxPlayers >= 4} // Disable button if greater than or equal to 4
            className={`px-4 py-2 bg-gray-300 text-gray-700 rounded-lg ${
              maxPlayers >= 4 && "cursor-not-allowed opacity-50"
            }`}
          >
            +
          </Button>
        </div>
      </div>

      {/* Create Room Button */}
      <Button
        onClick={handleCreateRoom}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Create Room
      </Button>
    </div>
  );
}

export default CreateRoom;
