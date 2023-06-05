import { useEffect, useState } from "react";

const useLocaStorage = (itemName, initialValue) => {
    const storageItem = localStorage.getItem(itemName);
    let parseItems;
    const getBoards = {};

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
    }, 1000);
  },[]);  
    
    

    item.forEach((todo) => {
      const board = todo.board;
      if (!getBoards[board]) { 
        getBoards[board] = [];
      };
      getBoards[board].push(todo);
    }); 
    let boardsKeys = Object.keys(getBoards) 
    
  
    const saveItems = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItems(newItem);
    };
    
    return {item, saveItems, loading, error, boardsKeys};
  };

  export {useLocaStorage};