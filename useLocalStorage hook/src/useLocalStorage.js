import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue !== null ? JSON.parse(storedValue) : defaultValue;

  const [data, setData] = useState(initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return {
    data,
    setData
  };
};

export default useLocalStorage;
