import { useState, useEffect } from 'react';

export const useLocalStorage = (storageKey: string, initialValue: any) => {
  const [storageVal, setStorageVal] = useState(() => getFromLocalStorage(storageKey) || initialValue);

  useEffect(() => {
    setToLocalStorage(storageKey, storageVal);
  }, [storageKey, storageVal]);

  return [storageVal, setStorageVal];
};

const getFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  try {
    return value ? JSON.parse(value) : null; // Handle the case where value is null
  } catch (error) {
    // Silently return the value;
    return value;
  }
};

const setToLocalStorage = (key: string, value: any) => {
  if (typeof value === 'object' && value !== null) {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
};
