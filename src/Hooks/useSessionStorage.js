import { useCallback, useState } from "react";

export function useSessionStorage(key, initialValue) {
  const [value] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const saveInSessionStorage = useCallback(
    (value) => {
      try {
        window.sessionStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    [key]
  );

  return [value, saveInSessionStorage];
}
