import axios from "axios";

const BASE_URL = "http://localhost:3001/api/v1"; // Thay đổi URL cho phù hợp

const friendApi = {
  // Lấy danh sách bạn bè
  getFriends: async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}/friends`);
    return response.data;
  },

  sendMessage: async (friendId, message) => {
    const response = await axios.post(
      `${BASE_URL}/friends/${friendId}/message`,
      { message }
    );
    return response.data; // Trả về thông tin tin nhắn đã gửi
  },

  getMessages: async (friendId) => {
    const response = await axios.get(
      `${BASE_URL}/friends/${friendId}/messages`
    );
    return response.data; // Trả về danh sách tin nhắn giữa người dùng và bạn bè
  },
};

export default friendApi;
