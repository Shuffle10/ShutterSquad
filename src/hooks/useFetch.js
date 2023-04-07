import { useState, useEffect } from "react";
import { getPhotographers } from "../services/clientAPI";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getAllPhotographers();
    }, 1000);
  }, []);

  const getAllPhotographers = async () => {
    let response = await getPhotographers();
    setData(response.data);
    setLoading(false);
  };

  return { data, loading };
};

export default useFetch;
