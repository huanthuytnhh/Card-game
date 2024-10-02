// const BASE_URL = "http://localhost:3001/api/v1"; // Thay đổi URL cho phù hợp

// const gameApi = {
//   // Tạo một phòng mới
//   createRoom: async (roomName) => {
//     const response = await fetch(`${BASE_URL}/rooms`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ roomName }),
//     });
//     return await handleResponse(response);
//   },

//   // Người chơi tham gia vào một phòng
//   joinRoom: async (roomName) => {
//     const response = await fetch(`${BASE_URL}/rooms/${roomName}/join`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return await handleResponse(response);
//   },

//   // Lấy danh sách người chơi trong phòng
//   getPlayersInRoom: async (roomName) => {
//     const response = await fetch(`${BASE_URL}/rooms/${roomName}/players`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return await handleResponse(response);
//   },

//   // Cập nhật trạng thái trò chơi
//   updateGameState: async (roomName, gameState) => {
//     const response = await fetch(`${BASE_URL}/rooms/${roomName}/game-state`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(gameState),
//     });
//     return await handleResponse(response);
//   },

//   // Người chơi thực hiện nước đi
//   playerMove: async (roomName, selectedCards) => {
//     const response = await fetch(`${BASE_URL}/rooms/${roomName}/move`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ selectedCards }),
//     });
//     return await handleResponse(response);
//   },

//   // Lấy thông tin trò chơi hiện tại
//   getCurrentGame: async (roomName) => {
//     const response = await fetch(`${BASE_URL}/rooms/${roomName}/current-game`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return await handleResponse(response);
//   },

//   // Bắt đầu trò chơi
//   startGame: async (roomName) => {
//     const response = await fetch(`${BASE_URL}/rooms/${roomName}/start`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return await handleResponse(response);
//   },
// };

// // Hàm xử lý phản hồi từ API
// const handleResponse = async (response) => {
//   if (!response.ok) {
//     const errorData = await response.json();
//     throw new Error(errorData.message || "Something went wrong");
//   }
//   return await response.json();
// };

// export default gameApi;
// apis/gameRoomApi.js
import axiosInstance from "../configs/axiosConfig";

const gameRoomApi = {
  // Tạo một phòng mới
  createRoom: async (roomName) => {
    const response = await axiosInstance.post("/rooms", { roomName });
    return response; // Trả về dữ liệu từ phản hồi
  },

  // Người chơi tham gia vào một phòng
  joinRoom: async (roomName) => {
    const response = await axiosInstance.post(`/rooms/${roomName}/join`);
    return response;
  },

  // Lấy danh sách người chơi trong phòng
  getPlayersInRoom: async (roomName) => {
    const response = await axiosInstance.get(`/rooms/${roomName}/players`);
    return response;
  },

  // Cập nhật trạng thái trò chơi
  updateGameState: async (roomName, gameState) => {
    const response = await axiosInstance.patch(
      `/rooms/${roomName}/game-state`,
      gameState
    );
    return response;
  },

  // Người chơi thực hiện nước đi
  playerMove: async (roomName, selectedCards) => {
    const response = await axiosInstance.post(`/rooms/${roomName}/move`, {
      selectedCards,
    });
    return response;
  },

  // Lấy thông tin trò chơi hiện tại
  getCurrentGame: async (roomName) => {
    const response = await axiosInstance.get(`/rooms/${roomName}/current-game`);
    return response;
  },

  // Bắt đầu trò chơi
  startGame: async (roomName) => {
    const response = await axiosInstance.post(`/rooms/${roomName}/start`);
    return response;
  },
};

export default gameRoomApi;
