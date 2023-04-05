import axios from "axios";

const URL = "http://localhost:8000";

export const registerPhotographer = async (data) => {
  try {
    return await axios.post(`${URL}/register`, data);
  } catch (error) {
    throw Error("Cant connect to the API");
  }
};
