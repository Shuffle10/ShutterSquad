import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const URL = "http://localhost:8000/";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(URL + endpoint)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data!");
          } else {
            return res.json;
          }
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, 2000);
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
