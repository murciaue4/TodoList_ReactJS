import { useState } from "react";

const useLocaStorage = (itemName, initialValue) => {
    const storageItem = localStorage.getItem(itemName);
    let parseItems;
    if (!storageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parseItems = initialValue;
    } else {
      parseItems = JSON.parse(storageItem);
    }
    const [item, setItems] = useState(parseItems);
  
    const saveItems = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItems(newItem);
    };
    return [item, saveItems];
  };

  export {useLocaStorage};