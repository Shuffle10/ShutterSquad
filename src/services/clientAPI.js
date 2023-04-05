import axios from "axios";

const URL = "";

export const registerPhotographer = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    throw error("Cant connect to the API");
  }
};
