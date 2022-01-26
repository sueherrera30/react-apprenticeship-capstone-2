import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [ data, setData] = useState();
  const [ loading, setLoading] = useState(false);
  const [ error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setLoading(false);
        } catch(error) {
            setError(error);
        }
    };
    fetchData();
  }, [url]);
  return { data, error, loading }
};

export default useFetch;