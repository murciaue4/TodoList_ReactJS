import { useEffect, useState } from "react";

const useLocaStorage = (itemName, initialValue) => {
    const storageItem = localStorage.getItem(itemName);
    let parseItems;

    const [item, setItems] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const[error, setError] = useState(false);
    
  useEffect(() => {
    setTimeout(() => {
      try {
        if (!storageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItems = initialValue;
        } else {
          parseItems = JSON.parse(storageItem);
          setItems(parseItems)
        }
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    }, 1500);
  },[]);  
    
  
    
  
    const saveItems = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItems(newItem);
    };
    return {item, saveItems, loading, error};
  };

  export {useLocaStorage};