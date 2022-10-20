import axios from "axios";
import { UserType } from "../../types/UserType";

const API_URL = "/api/users/";
axios.defaults.baseURL = `http://localhost:3002`;

// Register user
const register = async (userData: UserType) => {
  const response = await axios.post(API_URL + "register", userData);
  console.log(response.data);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Login user
const login = async (userData: UserType) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Logout user
const logout = () => localStorage.removeItem("user");

const authService = {
  register,
  logout,
  login,
};

export default authService;
