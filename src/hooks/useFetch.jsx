import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/apiUtils";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("Loading...");

    fetchDataFromApi(url)
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [url]);

  return { data, loading, error };
}
