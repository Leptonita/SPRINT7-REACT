import { useState } from "react";

const useLocalStorage = (key, initialValue, queryValue) => {

    const [storedValue, setStoredValue] = useState(() => {
        try {
            if (queryValue) { return queryValue };
            const itemStored = localStorage.getItem(key);
            return itemStored ? JSON.parse(itemStored) : initialValue;
        } catch (error) {
            console.log("error storedValue", error);
            return initialValue;
        }

    })

    const setValue = (value) => {
        try {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log("error setValue", error)
        }

    }
    return [storedValue, setValue];
}
export default useLocalStorage;