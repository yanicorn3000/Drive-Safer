import { useState } from "react";

const getLocalStorageData = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  } catch (error) {
    return undefined;
  }
};

export const useLocalStorageState = <T = any,>(
  KEY: string,
  initialState = undefined
) => {
  const [data, setStateData] = useState<T>(
    getLocalStorageData(KEY) ?? initialState
  );

  const setData = (data: T) => {
    if (data) {
      localStorage.setItem(KEY, JSON.stringify(data));
    } else {
      localStorage.removeItem(KEY);
    }

    setStateData(data);
  };

  return [data, setData] as const;
};
