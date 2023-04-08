import axios from "axios";

const URL = "http://localhost:8000";

export const registerPhotographer = async (data) => {
  try {
    return await axios.post(`${URL}/register`, data);
  } catch (error) {
    console.log("Cant connect to the API");
  }
};

export const getPhotographers = async (data) => {
  try {
    return await axios.get(`${URL}/all`, data);
  } catch (error) {
    console.log("Cant connect to the API");
  }
};
