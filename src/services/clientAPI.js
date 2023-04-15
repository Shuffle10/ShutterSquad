import axios from "axios";
import { useAuthContext } from "../hooks/useContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const URL = "https://shuttersquad-server.onrender.com";

export const registerPhotographer = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const register = async (data) => {
    try {
      const response = await axios.post(`${URL}/api/user/register`, data);
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

export const updateProfile = async (data, id) => {
  try {
    await axios.put(`${URL}/api/user/update/${id}`, data);
  } catch (err) {
    console.log(err);
  }
};

export const loginPhotographer = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const login = async (data) => {
    try {
      const response = await axios.post(`${URL}/api/user/login`, data);
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
  const logout = async () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};

export const deleteProfile = () => {
  const navigate = useNavigate();
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${URL}/api/user/delete/${id}`);
    } catch (err) {
      console.log(err);
    }
  };
  return { deleteUser };
};

export const getPhotographers = async (data) => {
  try {
    return await axios.get(`${URL}/api/photographer/all`, data);
  } catch (error) {
    console.log("Cant connect to the API");
  }
};
