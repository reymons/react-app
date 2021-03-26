import * as axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '443464a4-73ab-4a67-b59f-d2f785d9a980'
  }
});

export const usersAPI = {
  getUsers(pageNumber, pageSize) {
    return axiosInstance.get(`users?page=${pageNumber}&cout=${pageSize}`)
      .then(response => response.data);
  },
  followUser(userId) {
    return axiosInstance.post(`follow/${userId}`)
      .then(response => response.data);
  },
  unfollowUser(userId) {
    return axiosInstance.delete(`follow/${userId}`)
      .then(response => response.data);
  }
}

export const profileAPI = {
  getProfile(userId) {
    return axiosInstance.get(`profile/${userId}`)
      .then(response => response.data);
  },
  getStatus(userId) {
    return axiosInstance.get(`profile/status/${userId}`)
      .then(response => response.data);
  },
  updateStatus(text) {
    return axiosInstance.put(`profile/status`, { status: text })
      .then(response => response.data);
  }
}

export const authAPI = {
  getAuthInfo() {
    return axiosInstance.get(`auth/me`).then(response => response.data);
  },
  login(email, password, rememberMe) {
    return axiosInstance.post(`auth/login`, { email, password, rememberMe })
      .then(response => response.data);
  },
  logout() {
    return axiosInstance.delete(`auth/login`)
      .then(res => res.data);
  }
}