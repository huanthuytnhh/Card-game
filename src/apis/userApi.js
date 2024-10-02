import axiosInstance from "../configs/axiosConfig"; // Đường dẫn đến file cấu hình axios

const userApi = {
  getProfile: () => {
    return axiosInstance.get("/users/me");
  },
  getUser: (userId) => {
    return axiosInstance.get(`/users/get-detail/${userId}`);
  },
  getAllUsers: () => {
    return axiosInstance.get("/users/getAll");
  },
  getFriendRequest: (page, limit) => {
    return axiosInstance.get("/friend-requests/get-my", {
      params: {
        page,
        limit,
      },
    });
  },
  getFriendList: (userId) => {
    return axiosInstance.get(`/users/get-detail/${userId}/friend-list`);
  },
  searchUsers: (name, page = 1, limit = 10) => {
    return axiosInstance.get("/users/search", {
      params: {
        name,
        page,
        limit,
      },
    });
  },
  editProfile: (data) => {
    return axiosInstance.patch("/users/me/edit-profile", data);
  },
  addFriend: (data) => {
    return axiosInstance.post("/friend-requests/add-friend", data);
  },
  acceptFriendRequest: (friendRequestId, status) => {
    return axiosInstance.patch(`/friend-requests/update/${friendRequestId}`, {
      status,
    });
  },
};

export default userApi;
