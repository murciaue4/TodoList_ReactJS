import { useState } from "react";

const useDate = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const getDate = () => {
    let date = new Date();
    return date;
  };

  const [date, setDate] = useState(getDate());
  const [day, setDay] = useState(days[date.getDay()]);
  const [hours, setHours] = useState(date.getHours());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const currentDate = getDate();
  //     setDate(currentDate);
  //     setDay(days[currentDate.getDay()]);
  //     setHours(currentDate.getHours());
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);



  return { date, day, hours };
};

export { useDate };