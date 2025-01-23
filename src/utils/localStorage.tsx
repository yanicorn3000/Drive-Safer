import { useState } from "react";

const getLocalStorageData = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  } catch (error) {
    return undefined;
  }
};

export const useLocalStorageState = (KEY: string, initialState = undefined) => {
  const [data, setStateData] = useState(
    getLocalStorageData(KEY) ?? initialState
  );

  const setData = (data) => {
    if (data) {
      localStorage.setItem(KEY, JSON.stringify(data));
    } else {
      localStorage.removeItem(KEY);
    }

    setStateData(data);
  };

  return [data, setData];
};
