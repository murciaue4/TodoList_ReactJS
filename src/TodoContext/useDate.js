import { useState } from "react";

const useDate = () => {
   
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const getDate = () => {
        let date = new Date();
        return date
    }
    const data = getDate();
    
    
    const [date, setDate] = useState(data);
    const [day, setDay] = useState(days[data.getDay()])
    const [hours, setHours] = useState(data.getHours())


    return {date,day,hours}
}

export {useDate};
 