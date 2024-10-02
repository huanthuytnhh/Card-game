import React, { useState, useEffect } from "react";
import gameRoomApi from "../apis/gameRoomApi"; // Cập nhật import theo object API

const GameRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [players, setPlayers] = useState([]);

  const handleCreateRoom = async () => {
    await gameRoomApi.createRoom(roomName); // Gọi hàm API từ object
    fetchPlayers(); // Lấy danh sách người chơi
  };

  const handleJoinRoom = async () => {
    await gameRoomApi.joinRoom(roomName); // Gọi hàm API từ object
    fetchPlayers(); // Lấy danh sách người chơi
  };

  const fetchPlayers = async () => {
    const playerList = await gameRoomApi.getPlayersInRoom(roomName); // Gọi hàm API từ object
    setPlayers(playerList); // Cập nhật state players
  };

  return (
    <div className="game-room">
      <h2>Game Room</h2>
      <input
        type="text"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        placeholder="Enter Room Name"
      />
      <button onClick={handleCreateRoom}>Create Room</button>
      <button onClick={handleJoinRoom}>Join Room</button>
      <h3>Players in Room</h3>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameRoom;
