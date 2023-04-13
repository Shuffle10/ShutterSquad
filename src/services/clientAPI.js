import axios from "axios";
import { useAuthContext } from "../hooks/useContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const URL = "http://localhost:8000";

export const registerPhotographer = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const register = async (data) => {
    try {
      const response = await axios.post(`${URL}/api/user/register`, data);
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({ type: "LOGIN", payload: response.data });
      navigate("/", {
        state: { message: "Congratulation! You are a member of the squad!" },
      });
    } catch (err) {
      setError(error.response.data.msg);
    }
  };
  return { register, error };
};

export const loginPhotographer = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const login = async (data) => {
    try {
      const response = await axios.post(`${URL}/api/user/login`, data);
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({ type: "LOGIN", payload: response.data });
      navigate("/");
    } catch (error) {
      setError(error.response.data.msg);
    }
  };
  return { login, error };
};

export const logoutUser = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};

export const getPhotographers = async (data) => {
  try {
    return await axios.get(`${URL}/api/photographer/all`, data);
  } catch (error) {
    console.log("Cant connect to the API");
  }
};
